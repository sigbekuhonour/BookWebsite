import { FooterInfoCard } from "./FooterInfoCard";
import { FooterInfoContent } from "./FooterInfoContent";
import { FooterInfoTitle } from "./FooterInfoTitle";

export function Footer() {
  return (
    <div className="flex flex-col bg-[url('/FooterBackground.svg')] bg-cover w-full justify-between px-10 py-10">
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
          <FooterInfoContent content={"Instagram"} />
        </div>
        <FooterInfoCard
          title={"Address"}
          content={"55 Iceland Place, \n St John's,\n NL,\n A1B 0E9"}
          link="https://www.google.com/maps/search/?api=1&query=55 Iceland Place,St John's,NL,A1B 0E9"
        />
        <div className="flex flex-col">
          <FooterInfoTitle title={"Support"} />
          <FooterInfoContent
            content={"admin@gracevillebooks.shop"}
            link="mailto:admin@gracevillebooks.shop"
          />
          <FooterInfoContent content={"709-800-6965"} link="tel:7098006965" />
        </div>
      </div>
    </div>
  );
}
