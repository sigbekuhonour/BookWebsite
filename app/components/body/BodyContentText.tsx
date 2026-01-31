export default function BodyContentText({
  bodyContent,
}: {
  bodyContent: string;
}) {
  return (
    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-4">{bodyContent}</p>
  );
}
