import HeaderText from "./HeaderText";

export function Header() {
  return (
    <div id="Header" className="flex w-full h-15 flex-row items-center justify-between p-5 border-0 border-b-2 border-black bg-white dark:bg-black sm:justify-around">
      <HeaderText headerText="Home" route="/#Header"/>
      <HeaderText headerText="Contact" route="/#Footer" />
      <HeaderText headerText="About" route="/about"/>
      <HeaderText headerText="Shipping & Returns" route="/shipping"/>
    </div>
  );
}
