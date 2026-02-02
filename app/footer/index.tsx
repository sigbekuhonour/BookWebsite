import { FooterInfoCard } from "./FooterInfoCard";
import { FooterInfoContent } from "./FooterInfoContent";
import { FooterInfoTitle } from "./FooterInfoTitle";

export function Footer() {
  return (
    <div
      id="Footer"
      className="flex flex-col bg-[url('/FooterBackground.svg')] bg-cover w-full justify-between px-10 py-10"
    >
      <p className="text-white text-2xl font-semibold ">
        Graceville Books & Christian Resources
      </p>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-5 border-0 border-t border-t-white ">
        <div className="flex flex-col">
          <FooterInfoTitle title={"Social"} />
          <FooterInfoContent
            content={"Facebook"}
            link="https://www.facebook.com/gracevillebooks/"
          />
          <FooterInfoContent
            content={"Instagram"}
            link="https://www.instagram.com/gracevillebooks?igsh=bzV4eWhzdmR3MHl0&utm_source=qr"
          />
        </div>
        <FooterInfoCard
          title={"Address"}
          content={"40 International Place,\n St John's,\n NL,\nA1A 0R6"}
          link="https://www.google.com/maps/search/?api=1&query=40 International Place,St John's,NL,A1A 0R6"
        />
        <div className="flex flex-col">
          <FooterInfoTitle title={"Support"} />
          <FooterInfoContent
            content={"gracevillebooks@gmail.com"}
            link="mailto:gracevillebooks@gmail.com"
          />
          <FooterInfoContent content={"709-730-4177"} link="tel:7097304177" />
        </div>
      </div>
    </div>
  );
}
