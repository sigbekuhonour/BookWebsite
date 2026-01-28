export default function BodyContentText({
  bodyContent,
}: {
  bodyContent: string;
}) {
  return (
    <h1 className=" font-medium text-[15px] text-gray-500">{bodyContent}</h1>
  );
}
