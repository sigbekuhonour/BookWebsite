import Image from "next/image";
export function Intro() {
  return (
    <div className="relative flex flex-col w-full min-h-[50vh] md:min-h-[70vh] items-center justify-center px-4 overflow-hidden">
      <Image
        src="/HeaderBackground.jpg"
        alt="Background"
        fill
        priority
        className="object-cover"
        quality={75}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
        sizes="100vw"
      />
      <div className="flex flex-col items-center max-w-3xl pt-5 pb-55 md:pb-78 lg:pb-80 animate-in slide-in-from-left-5 fade-in duration-1000 px-5 z-10">
        <h1 className="text-white font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-7xl drop-shadow-2xl">
          GRACEVILLE BOOKS <br />
          <span className="text-amber-200 text-2xl md:text-4xl lg:text-6xl">
            &
          </span>{" "}
          CHRISTIAN RESOURCES
        </h1>
        <br />
        <p className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium max-w-2xl drop-shadow-md leading-relaxed">
          Providing quality Christian literature and resources for your
          spiritual growth.
        </p>
      </div>

      <div className="absolute flex bottom-0 left-1/2 -translate-x-1/2 translate-y-8 md:translate-y-30 lg:translate-y-30 w-full max-w-4xl  justify-center animate-in slide-in-from-bottom-5 fade-in duration-1000 delay-300 z-10">
        <Image
          src="/HeaderBookBackground.png"
          alt="Books illustration"
          width={950}
          height={600}
          className="w-full h-auto object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
        />
      </div>
    </div>
  );
}
