import Link from "next/link";
import { DateComp } from "./date";

export default function Footer() {
  return (
    <div className="flex sm:justify-between justify-start items-start sm:items-center text-black dark:text-zinc-50 mb-6 sm:flex-row flex-col">
      <div className="flex gap-2 py-2 items-center">
        <div> currently in delhi </div>
        <DateComp></DateComp>
      </div>
      <div className="flex gap-6 justify-end font-bold py-2">
        <Link href={"https://x.com/01_anra"} target="_blank">
          x
        </Link>
        <Link href={"https://github.com/ranaanjel"} target="_blank">
          github
        </Link>
      </div>
    </div>
  );
}
