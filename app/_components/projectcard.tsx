import Image from "next/image";
import { MoveUpRight, FolderGit2, Divide } from "lucide-react";
import Link from "next/link";
import { Paragraph } from "./paragraph";

export default function DefaultProjectCard({
  imgSrc,
  header,
  liveLink,
  github,
  description,
  tags,
}: {
  imgSrc: string;
  header: string;
  liveLink: string;
  github?: string;
  description: string;
  tags: string[];
}) {

  let unoptimizedValue = imgSrc.endsWith(".gif") ; 


  return (
    <div className="flex gap-5 space-between dark:text-zinc-300 text-black rounded-lg  transition-colors p-2 dark:hover:bg-zinc-300/10 hover:bg-black/10">
      <div className="w-1/3 my-2 ">
        <Image
          unoptimized={unoptimizedValue}
          src={imgSrc}
          height={400}
          alt="banner image"
          width={400}
          className="h-32 border w-full object-cover md:object-fill"
        ></Image>
      </div>
      <div className="flex flex-col gap-1 pt-2 flex-1 ">
        <div className="flex justify-between">
          <div className="font-bold">{header}</div>
          <div className="flex gap-2 items-center  ">
            {liveLink && (
              <Link
                target="_blank"
                href={liveLink}
                className="hover:animate-wiggle"
              >
                <MoveUpRight className="size-5 dark:text-zinc-300 text-black"></MoveUpRight>{" "}
              </Link>
            )}
            <Link
              target="_blank"
              className="hover:animate-wiggle"
              href={github || "#"}
            >
              {" "}
              <FolderGit2 className="size-5 dark:text-zinc-300 text-black"></FolderGit2>{" "}
            </Link>
          </div>
        </div>
        <div>
          <p className="opacity-80 text-sm mb-2">{description}.</p>
        </div>
        <div>
          <div className="text-sm">Technologies Used:</div>
          <div className="flex flex-wrap gap-2 my-2">
            {tags.map((item, index) => {
              return (
                <div
                  key={index}
                  className="text-xs border py-1 px-2 border-black/30 dark:border-zinc-300/30 rounded-md"
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
