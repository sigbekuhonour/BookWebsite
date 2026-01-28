export default function HeaderText({ headerText }: { headerText: string }) {
  return (
    <a
      href=""
      className=" text-black dark:text-amber-50 font-medium hover:text-gray-300"
    >
      {headerText}
    </a>
  );
}
