import { supabase } from "@/app/utils/supabase/supabase";
import BodyContentText from "./BodyContentText";
import BodyTitleText from "./BodyTitleText";
import BookList from "./books/BookList";
import TestiominialCard from "./testimonial/TestimonialCard";
import { Book } from "./../../types/Book";
import TestimonyList from "./testimonial/TestimonialList";

export async function Body() {
  const [booksResult, testimonialsResult] = await Promise.all([
    supabase.from("Books").select(),
    supabase.from("Testimonials").select(),
  ]);
  
  if (booksResult.error) {
    console.error("Error fetching books:", booksResult.error);
  }

  if (testimonialsResult.error) {
    console.error("Error fetching testimonials:", testimonialsResult.error);
  }

  return (
    <div className="grow flex flex-col px-10 pt-7 items-start justify-evenly">
      <BodyTitleText bodyTitle="Treat your shelf" />
      <BodyContentText bodyContent="The ultimate form of self-care for your mind (and your living room).  " />
      <BodyContentText bodyContent="Graceville books and christian resources got you covered. Below you’ll find a list of some of best books available and you can immediately request for an order if you're interested in any." />
      <br />
      {booksResult.data && <BookList bookList={booksResult.data} />}
      <BodyTitleText bodyTitle="Testimonials" />
      <BodyContentText bodyContent="A little line about what’s being said and who’s saying it." />
      <br />
      {testimonialsResult.data && (
        <TestimonyList testimonialList={testimonialsResult.data} />
      )}
    </div>
  );
}
