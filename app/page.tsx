import { Body } from "./components/body";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Intro } from "./components/intro";

export default function Home() {
  return (
    // min-h-screen ensures the background color covers the whole page
    <div className="flex flex-col min-h-screen w-full font-sans dark:bg-black selection:bg-amber-200">
      <Header />
      <main className="grow overflow-x-hidden">
        <Intro />
        <Body />
      </main>
      <Footer />
    </div>
  );
}

