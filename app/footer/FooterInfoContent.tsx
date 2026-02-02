export function FooterInfoContent({
  content,
  link = "",
}: {
  content: string;
  link?: string;
}) {
  return (
    <a
      className="font-normal text-white block whitespace-pre-line hover:underline"
      href={link}
    >
      {content}
    </a>
  );
}
