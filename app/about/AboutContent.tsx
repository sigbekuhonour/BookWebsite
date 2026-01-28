export function AboutContent({ content }: { content: string }) {
  return (
    <div className="flex justify-center items-center p-15">
      <p className="font-semibold text-[18px] text-white">{content}</p>
    </div>
  );
}
