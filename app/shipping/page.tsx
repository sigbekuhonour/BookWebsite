import { Footer } from "./../footer";
import { Header } from "./../header";


export default function Shipping() {
  return (
    <div className="flex flex-col min-h-screen w-full font-sans bg-background">
      <Header />
      <main className="grow flex flex-col">
        {/* Hero Section */}
        <section className="w-full py-20 bg-muted/30 flex justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-center">
            Shipping & Returns
          </h1>
        </section>

        {/* Policies Section */}
        <section className="container mx-auto px-6 md:px-20 py-16 grid md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-foreground border-b pb-2">Return Policy</h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                Graceville Books and Christian Resources wants you to be satisfied with your purchase. In the event that you are not satisfied with any purchase, you may return it within <strong>30 days of shipment</strong>.
              </p>
              <p>
                All purchased items must be returned in their original condition. If your order arrives damaged, please return it immediately for a full refund or exchange, subject to your preference.
              </p>
              <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20 text-sm">
                <p className="font-semibold text-destructive mb-1">Please Note:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Items on sale are not refundable.</li>
                  <li>Return shipping charges will be applied unless an error was made in the order processing.</li>
                  <li>Shipping charges will be deducted from the return amount.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-foreground border-b pb-2">Shipping Information</h2>
             <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  Graceville ships primarily across Canada and Internationally, but shipping costs vary across locations.
                </p>
                <p>
                  Most orders will ship out within 24 hours of ordering.
                </p>
                 <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <p className="font-medium text-foreground">
                    Shipping is free for purchases over <span className="text-amber-600 font-bold">$100</span> in Canada.
                  </p>
                  <p className="mt-2 text-sm">
                    A discount of 50% in shipping cost will be applied to purchases over $100 to international destinations.
                  </p>
                </div>
                <p className="text-sm italic opacity-80">
                  Kindly note that there may be delays in planned shipping times due to ongoing global logistics challenges.
                </p>
             </div>
          </div>
        </section>

         {/* Contact Section */}
        <section className="w-full py-12 bg-amber-50 dark:bg-amber-950/20 flex justify-center text-center">
           <div className="container px-6">
              <p className="text-lg text-foreground">
                If you have any questions, please contact our team at <a href="tel:7097304177" className="font-bold hover:underline">709-730-4177</a> or email us at <a href="mailto:gracevillebooks@gmail.com" className="font-bold hover:underline text-primary">gracevillebooks@gmail.com</a>
              </p>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
