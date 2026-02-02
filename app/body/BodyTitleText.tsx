export default function BodyTitleText({ bodyTitle }: { bodyTitle: string }) {
  return <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">{bodyTitle}</h2>;
}
