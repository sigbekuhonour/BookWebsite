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
    <div className="flex flex-col bg-white dark:bg-black min-h-40 shrink-0 w-87.5 rounded-2xl shadow-lg border border-neutral-100 p-6 transition-all hover:shadow-xl">
      <div className="flex flex-row justify-start items-center pb-6">
        <img
          src="./TestimonialIcon.svg"
          className="size-12 pr-4 object-contain"
          alt=""
        />
        <div>
          <TestiominialAuthorText author={author} />
          <TestiominialWorkplaceText workplace={currentWorkplace} />
        </div>
      </div>
      <TestiominialContentText content={content} />
    </div>
  );
}
