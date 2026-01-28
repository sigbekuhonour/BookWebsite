import { FooterInfoContent } from "./FooterInfoContent";
import { FooterInfoTitle } from "./FooterInfoTitle";

export function FooterInfoCard({
  title,
  content,
  link = "",
}: {
  title: string;
  content: string;
  link: string;
}) {
  return (
    <div>
      <FooterInfoTitle title={title} />
      <FooterInfoContent content={content} link={link} />
    </div>
  );
}
