import { Header } from "../header";
import { Footer } from "../footer";
import { Mail, MessageCircle, Phone } from "lucide-react";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen w-full font-sans bg-background">
      <Header />
      <main className="grow flex flex-col">
        {/* Hero Section */}
        <section className="w-full py-20 bg-muted/30 flex justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-center">
            Contact Us
          </h1>
        </section>

        {/* Contact Info Section */}
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
                Have a complaint, enquiry, or just want to say hello? We'd love
                to hear from you. Reach out to us using the contact details
                below.
              </p>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto">
                <ContactCard
                  icon={<MessageCircle className="h-6 w-6" />}
                  title="Call Us or Text Us"
                  link="sms:7097304177"
                  description="709-730-4177"
                  time="Mon-Fri from 9am to 5pm"
                />
                <ContactCard
                  icon={<Mail className="h-6 w-6" />}
                  title="Email"
                  link="mailto:gracevillebooks@gmail.com"
                  description="gracevillebooks@gmail.com"
                  time="We'll get back to you soon"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
