import Link from "next/link";

export default function HeaderText({ headerText,route }: { headerText: string ,route:string}) {
  return (
    <Link
      href={route}
      className="text-sm md:text-base font-medium text-foreground/80 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
    >
      {headerText}
    </Link>
  );
}
