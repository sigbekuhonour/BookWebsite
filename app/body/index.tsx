import { supabase } from "@/app/utils/supabase/supabase";
import BodyContentText from "./BodyContentText";
import BodyTitleText from "./BodyTitleText";
import BookList from "./books/BookList";
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
    <div className="flex flex-col w-full bg-background">
      <section className="w-full py-16 px-6 md:px-16 container mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <BodyTitleText bodyTitle="Treat your shelf" />
          <BodyContentText bodyContent="The ultimate form of self-care for your mind (and your living room).  " />
          <BodyContentText bodyContent="Graceville books and christian resources got you covered. Below you’ll find a list of some of best books available and you can immediately request for an order if you're interested in any." />
        </div>

        {booksResult.data && <BookList bookList={booksResult.data} />}
      </section>

      <section className="w-full py-16 px-6 md:px-16 bg-muted/30">
        <div className="container mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <BodyTitleText bodyTitle="Testimonials" />
            <BodyContentText bodyContent="A little line about what’s being said and who’s saying it." />
          </div>
          {testimonialsResult.data && (
            <TestimonyList testimonialList={testimonialsResult.data} />
          )}
        </div>
      </section>
    </div>
  );
}
