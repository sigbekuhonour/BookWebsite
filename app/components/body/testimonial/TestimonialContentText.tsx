export default function TestiominialContentText({
  content,
}: {
  content: String;
}) {
  return (
    <h1 className="font-medium text-[15px] dark:text-gray-200">{content}</h1>
  );
}
