export function AboutTitle({ title }: { title: string }) {
  return (
    <div className="flex justify-center items-center w-full py-10">
      <h1 className="font-bold text-[36px] text-white">{title}</h1>
    </div>
  );
}
