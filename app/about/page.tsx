import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { AboutContent } from "./AboutContent";
import { AboutTitle } from "./AboutTitle";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen w-full font-sans dark:bg-black selection:bg-amber-200">
      <Header />
      <main className="grow overflow-x-hidden bg-black">
        <div className="flex flex-col ">
          <AboutTitle title="Our Story" />
          <AboutContent
            content="Graceville Books and Christian Resources began with the idea of meeting the needs of the believers within a local Church. We wanted to provide easy access to Bibles, good quality Christian Books, Christian themed gift items and home accessories, etc for the members of this community. We knew that the availability of these sources of expression of the Christian faith would contribute to a richer experience of the Christian life for them.
                    As we served the believers in this local church setting and witnessed the benefits and blessings it brought their way, we saw the possibility of serving an even wider community of clients.
                    Being the hands and feet of Jesus gives us great joy!"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
