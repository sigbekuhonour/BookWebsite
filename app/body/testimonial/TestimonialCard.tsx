import TestiominialAuthorText from "./TestimonialAuthorText";
import TestiominialContentText from "./TestimonialContentText";
import TestiominialWorkplaceText from "./TestimonialWorkplaceText";

export default function TestiominialCard({
  author,
  currentWorkplace,
  content,
}: {
  author: string;
  currentWorkplace: string;
  content: string;
}) {
  return (
    <div className="flex flex-col bg-card/80 dark:bg-card/50 backdrop-blur-md min-h-40 shrink-0 w-[300px] md:w-[350px] rounded-2xl shadow-sm border border-border/50 p-6 transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="flex flex-row justify-start items-center pb-4 gap-4">
        <div className="size-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
          <img
            src="./TestimonialIcon.svg"
            className="size-8 object-contain opacity-80"
            alt="Testimonial Icon"
          />
        </div>
        <div className="flex flex-col">
          <TestiominialAuthorText author={author} />
          <TestiominialWorkplaceText workplace={currentWorkplace} />
        </div>
      </div>
      <TestiominialContentText content={content} />
    </div>
  );
}
