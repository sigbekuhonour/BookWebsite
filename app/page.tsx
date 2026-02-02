import { Body } from "./body";
import { Footer } from "./footer";
import { Header } from "./header";
import { Intro } from "./intro";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full font-sans dark:bg-black selection:bg-amber-200">
      <Header />
      <main className="grow overflow-x-hidden">
        <Intro />
        <Body />
      </main>
      <Footer  />
    </div>
  );
}

