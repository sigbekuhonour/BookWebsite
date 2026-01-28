import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ShippingContent } from "./ShippingContent";
import { ShippingTitle } from "./ShippingTitle";

export default function Shipping() {
  return (
    <div className="flex flex-col min-h-screen w-full font-sans dark:bg-black selection:bg-amber-200">
      <Header />
      <main className="grow overflow-x-hidden bg-black">
        <div className="flex flex-col ">
          <ShippingTitle title={"Shipping and Returns Policy"} />
          <ShippingContent
            content={"Graceville Books and Christian Resources wants you to be satisfied with your purchase. In the event that you are not satisfied with any purchase, you may return it within 30 days of shipment. \n  \nIf you have any questions, please contact our team at 7097704862 or email us at admin@gracevillebooks.shop  ​\n \nAll purchased items must be returned in their original condition. If your order arrives damaged, please return it immediately for a full refund or exchange, subject to your preference.  \n​ \nPlease note:  Items on sale are not refundable  Return shipping charges will be applied unless an error was made in the order processing. Shipping charges will be deducted from the return amount"}
          />
          <ShippingTitle title={"More on Shipping"} />
          <ShippingContent
            content={"Graceville ships primarily across Canada and Internationally, but shipping costs vary across locations.  \n \n​Most orders will ship out within 24 hours of ordering  \n \n​Shipping is free for purchases over $100 in Canada  \n \nA discount of 50% in shipping cost will be applied to purchases over $100 to international destinations.     ​Kindly note that there may be delays in planned shipping times due to the ongoing pandemic."}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
