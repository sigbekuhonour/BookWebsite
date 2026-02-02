import { Footer } from "./../footer";
import { Header } from "./../header";


export default function About() {
  return (
    <div className="flex flex-col min-h-screen w-full font-sans bg-background">
      <Header />
      <main className="grow flex flex-col">
        {/* Hero Section */}
        <section className="w-full py-20 bg-muted/30 flex justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-center">
            Our Story
          </h1>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-6 md:px-20 py-16 flex flex-col gap-8 max-w-4xl">
           <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
            <p>
              Graceville Books and Christian Resources began with the idea of meeting the needs of the believers within a local Church.
            </p>
            <p>
              We wanted to provide easy access to Bibles, good quality Christian Books, Christian themed gift items and home accessories, etc for the members of this community.
            </p>
            <p>
              We knew that the availability of these sources of expression of the Christian faith would contribute to a richer experience of the Christian life for them.
            </p>
            <p>
              As we served the believers in this local church setting and witnessed the benefits and blessings it brought their way, we saw the possibility of serving an even wider community of clients.
            </p>
            <p className="font-semibold text-foreground text-xl pt-4">
              Being the hands and feet of Jesus gives us great joy!
            </p>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
