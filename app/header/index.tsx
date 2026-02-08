import HeaderText from "./HeaderText";

export function Header() {
  return (
    <div id="Header" className="sticky top-0 z-50 flex w-full h-16 flex-row items-center justify-between px-6 py-4 border-b border-black/5 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-all duration-300 sm:justify-around supports-[backdrop-filter]:bg-white/60">
        <HeaderText headerText="Home" route="/#Header"/>
        <HeaderText headerText="Contact" route="/contact" />
        <HeaderText headerText="About" route="/about"/>
        <HeaderText headerText="Shipping & Returns" route="/shipping"/>
        <HeaderText headerText="Login" route="/admin/login"/>
    </div>
  );
}
