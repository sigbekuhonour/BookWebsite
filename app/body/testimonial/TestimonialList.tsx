import { Testimonial } from "@/app/types/Testimonial";
import TestiominialCard from "./TestimonialCard";

export default function TestimonyList({
  testimonialList,
}: {
  testimonialList: Testimonial[];
}) {
  return (
    <div className="flex flex-row py-4 pb-8 overflow-x-auto w-full gap-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 mask-image-gradient">
      {testimonialList.map((testimonial) => (
        <div key={testimonial.id} className="snap-center shrink-0">
          <TestiominialCard
            author={testimonial.author}
            currentWorkplace={testimonial.currentWorkplace}
            content={testimonial.content}
          />
        </div>
      ))}
    </div>
  );
}
