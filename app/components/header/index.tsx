import HeaderText from "./HeaderText";

export function Header() {
  return (
    <div className="flex w-full h-15 flex-row items-center justify-between p-5 bg-white dark:bg-black sm:justify-around">
      <HeaderText headerText="Home" />
      <HeaderText headerText="Contact" />
      <HeaderText headerText="About" />
      <HeaderText headerText="Returns" />
    </div>
  );
}
