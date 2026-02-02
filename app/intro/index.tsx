export function Intro() {
  return (
    <div className="flex flex-col md:flex-row bg-[url('/HeaderBackground.svg')] bg-cover bg-center w-full min-h-[60vh] items-center justify-between px-6 md:px-16 py-12 md:py-20 overflow-clip gap-8">
      <div className="flex flex-col items-start gap-4 max-w-2xl animate-in slide-in-from-left-5 fade-in duration-1000">
        <h1 className="text-white font-extrabold text-4xl md:text-6xl tracking-tight leading-tight drop-shadow-lg">
          GRACEVILLE BOOKS <br />
          <span className="text-amber-200">&</span> CHRISTIAN RESOURCES
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-medium max-w-lg drop-shadow-md">
          Providing quality Christian literature and resources for your spiritual growth.
        </p>
      </div>
      
      <div className="relative animate-in slide-in-from-right-5 fade-in duration-1000 delay-300">
        <img
          src="/HeaderBookBackground.svg"
          alt="Books illustration"
          className="w-full max-w-md md:max-w-xl object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
