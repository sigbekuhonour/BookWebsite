import Link from "next/link";

export default function HeaderText({
  headerText,
  route,
}: {
  headerText: string;
  route: string;
}) {
  return (
    <Link
      href={route}
      className="text-sm md:text-base lg:text-lg font-medium text-foreground/80 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200 whitespace-nowrap"
    >
      {headerText}
    </Link>
  );
}
