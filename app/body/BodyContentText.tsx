export default function BodyContentText({
  bodyContent,
}: {
  bodyContent: string;
}) {
  return (
    <p className="text-muted-foreground text-lg leading-relaxed w-full mb-4">
      {bodyContent}
    </p>
  );
}
