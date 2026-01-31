export function ShippingTitle({ title }: { title: string }) {
  return (
    <div className="flex justify-center items-center w-full p-10">
      <h1 className="font-bold text-[36px] text-white">{title}</h1>
    </div>
  );
}
