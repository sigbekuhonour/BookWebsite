import { Testimonial } from "@/app/types/Testimonial";
import TestiominialCard from "./TestimonialCard";

export default function TestimonyList({
  testimonialList,
}: {
  testimonialList: Testimonial[];
}) {
  return (
    <div className="flex flex-row pb-10 overflow-x-auto w-full gap-6">
      {testimonialList.map((testimonial) => (
        <div key={testimonial.id}>
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
