import { Body } from "./body";
import { Footer } from "./footer";
import { Header } from "./header";
import { Suspense } from "react";
import { Intro } from "./intro";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full font-sans dark:bg-black selection:bg-amber-200">
      <Header />
      <main className="grow overflow-x-hidden">
        <Intro />
        <Suspense
          fallback={
            <div className="h-screen w-full flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <Body />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
