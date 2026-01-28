export function Intro() {
  return (
    <div className="flex flex-col bg-[url('/HeaderBackground.svg')] bg-cover w-full items-center justify-between px-10 py-10 overflow-clip">
      <p className="text-white font-extrabold text-4xl">
        GRACEVILLE BOOKS & CHRISTIAN RESOURCES
      </p>
      <img
        src="./HeaderBookBackground.svg"
        alt=""
        className="translate-y-15 "
      />
    </div>
  );
}
