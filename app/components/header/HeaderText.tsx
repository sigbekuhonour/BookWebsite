import Link from "next/link";

export default function HeaderText({ headerText,route }: { headerText: string ,route:string}) {
  return (
    <Link
      href={route}
      className=" text-black dark:text-amber-50 transition-discrete font-medium hover:text-gray-300"
    >
      {headerText}
    </Link>
  );
}
