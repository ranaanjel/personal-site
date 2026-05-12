"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { UnderLineLink } from "./link";
import { UpdateDate } from "./agebox";
import { BlogData, milestone2026, PursuitData, update2026 } from "../_utils/data";
import {  useRouter } from "next/navigation";
import { Table } from "./table";

// conditional rendering for menu section - 2026 , about , pursuit , blogs - based on the click of the menu button in the side bar

export default function MenuSection() {
  let [currentLink, setCurrentLink] = useState("2026");

  let linkClass = `hover:underline decoration-wavy list-none cursor-pointer text-gray-900/70 dark:text-zinc-300/70 hover:text-gray-900 dark:hover:text-zinc-300 font-medium`;
  let activeLinkClass = `underline decoration-wavy list-none cursor-pointer dark:text-zinc-300 font-medium`;

  let clickHandle = useCallback(function (
    eObj: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) {
    let value = eObj.currentTarget.innerText;
    setCurrentLink(value);
    console.log(value);

    return 
  }, []);


  return (
    <div className="flex space-between sm:gap-0 gap-2 sm:min-h-[80vh] md:my-20 my-10 snap-start scroll-mt-10 ">
      <div className="sm:w-32 min-w-16 ">
        <nav className="flex flex-col space-y-4 text-gray-900 dark:text-zinc-300/70 font-medium">
          <li
            onClick={clickHandle}
            className={currentLink == "2026" ? activeLinkClass : linkClass}
          >
            2026
          </li>
          <li
            onClick={clickHandle}
            className={currentLink == "About" ? activeLinkClass : linkClass}
          >
            About
          </li>
          <li
            onClick={clickHandle}
            className={currentLink == "Blogs" ? activeLinkClass : linkClass}
          >
            Blogs
          </li>
          <li
            onClick={clickHandle}
            className={currentLink == "Pursuit" ? activeLinkClass : linkClass}
          >
            Pursuit
          </li>
        </nav>
      </div>
      <div key={currentLink} className="flex-1 grow ">
        {currentLink == "2026" && <Year text="2026"></Year>}
        {currentLink == "About" && <About></About>}
        {currentLink == "Blogs" && <Blogs></Blogs>}
        {currentLink == "Pursuit" && <Pursuit></Pursuit>}
      </div>
    </div>
  );
}

// year : focus, updates, yearly goals, books

function Year({ text }: { text: string }) {
  let mileStoneRef = useRef<{ value: string; completed: boolean }[]>(milestone2026);

  let topHeaderClass = `text-5xl font-bold text-gray-900 dark:text-zinc-300/70 mb-6`;
  let headerClass = `text-lg font-semibold tracking-wide text-gray-900/60 dark:text-zinc-300/60 mb-2`;
  let paragraphClass = `text-md text-gray-900 dark:text-zinc-300 my-4`;
  let paragraphSmallClass = `text-sm text-gray-900/50 dark:text-zinc-300/50 mb-4`;

  return (
    <div className="dark:text-zinc-300/70 text-gray-900/70 scroll-mt-24" id="year">
      <div>
        <div className={topHeaderClass}>{text}</div>
        <p className={paragraphClass}>
          a log for keeping track of what I'm building, learning and doing this
          year.
        </p>
        <div className={paragraphSmallClass}>
          want to see other years?{" "}
          <UnderLineLink
            type="small"
            hrefValue="/archive"
            text="check the archive"
            tooltipValue="under construction"
          ></UnderLineLink>
        </div>
      </div>
      <hr className="my-8 border-gray-300 dark:border-zinc-700" />
      <div>
        <div className={headerClass}>CURRENT FOCUS</div>
        <p className={paragraphClass}>
          on finishing my web-dev & web3 cohort, then starting building
          projects.
        </p>
      </div>
      <hr className="my-8 border-gray-300 dark:border-zinc-700" />
      <div>
        <div className={headerClass}>UPDATES</div>
        {
          update2026.map((item, index) => {
            let text = item.value;
            let date = item.date;

            return <div key={index}>
              <UpdateDate text={text} date={date}></UpdateDate>
            </div>
          })
        }
       
      </div>
      <hr className="my-8 border-gray-300 dark:border-zinc-700" />

      <div>
        <div className={headerClass}>MILESTONES</div>
        {mileStoneRef.current.map((obj, index) => {
          return (
            <div key={index} className="flex items-center space-x-4 my-4">
              <div
                className={`min-w-5 min-h-5 rounded-full border-2 ${obj.completed ? "bg-green-500 border-green-500" : "border-gray-500 dark:border-zinc-300/70"}`}
              ></div>
              <div
                className={`text-md text-gray-900 dark:text-zinc-300 ${obj.completed ? "line-through" : ""}`}
              >
                {obj.value || `Milestone ${index + 1}`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function About() {
  let headerClass = `text-lg font-bold text-gray-900/50 dark:text-zinc-300/50 mb-6 uppercase tracking-wide`;
  let aboutDataRef = useRef<
    { age: string; highlight: string; supplementary?: string }[]
  >([
    {
      age: "0",
      highlight: "Born in a Rohtak, India",
      supplementary: "Move to delhi when I was 3",
    },
    {
      age: "18",
      highlight: "Gradudated from Senior Secondary School",
      supplementary:
        "redirected my aim from footballer to a finding ways for earning money",
    },
    {
      age: "19",
      highlight: "Enrolled in the Delhi University for B.com (hons)",
      supplementary:
        "Took B.com (hons) as well as investing course by Varun Malhotra (EIFS)",
    },
    {
      age: "21",
      highlight:
        "Covid happened, started learning graphic design and coding, software intriguied my interest the most",
      supplementary: "Huge influence Varun Mayya, read his book pajma profits",
    },
    {
      age: "22",
      highlight: "Started my first business, a cafe named ijwifoods",
      supplementary:
        "at the same time, graduated from Delhi University with a degree in commerce",
    },
    {
      age: "24",
      highlight:
        "Started my second business, quikcrats, handled the fullstack of the business.",
      supplementary: "got serious & took the web-dev course by Harkirat Singh",
    },
    {
      age: "25",
      highlight: "Certified in Android mobile repair and servicing",
      supplementary: "hardware is fun",
    },
  ]);
  return (
    <div>
      <div className="flex items-center  gap-4">
        <span className={headerClass + " w-16 text-center  "}>AGE</span>
        <span className={headerClass + " flex-1"}>HIGHLIGHT</span>
      </div>
      <div>
        {aboutDataRef.current.map((obj, index) => {
          console.log("hello");

          let age = obj.age || `age ${index + 1}`;
          let highlight = obj.highlight || `highlight ${index + 1}`;
          let supplementary = obj.supplementary || `supplementary ${index + 1}`;

          return (
            <div className="my-4 flex gap-4" key={index}>
              <span
                className={
                  "h-8 w-16 flex justify-center rounded-sm items-center border border-zinc-600/40 dark:text-zinc-300 dark:bg-gray-800/50 text-black/80 bg-amber-100/50"
                }
              >
                {age}
              </span>
              <div className="flex flex-1 flex-col">
                <span
                  className={" dark:text-zinc-300 text-black tracking-wide"}
                >
                  {highlight}
                </span>
                <span className={"text-sm dark:text-zinc-300/50 text-black/60"}>
                  {supplementary}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Blogs() {
  let topHeaderClass = `text-5xl font-bold text-gray-900 dark:text-zinc-300/70 mb-6`;
  let headerClass = `text-lg font-semibold tracking-wide text-gray-900/60 dark:text-zinc-300/60 mb-2`;
  let paragraphClass = `text-md text-gray-900 dark:text-zinc-300 my-4`;
  let paragraphSmallClass = `text-sm text-gray-900/50 dark:text-zinc-300/50 mb-4`;
  let router = useRouter();

  // thoughts on productivity, tech, and building a more intentional life.
  return (
    <div className="dark:text-zinc-300/70 text-gray-900/70">
      <div>
        <div className={topHeaderClass}>Blogs</div>
        <p className={paragraphClass}>
          thoughts on business, tech, and building a more intentional life.
        </p>
        <div className="h-auto border border-zinc-300/40 rounded-sm">
          {BlogData.map((obj, index) => {
            let link = obj.link || "#";
            let tag = obj.tag || "general";

            let bottomBorder = "";
            if (index !== BlogData.length - 1) {
              bottomBorder = "border-b border-zinc-300/40";
            }

            return (
              <div
                onClick={() => router.push(link)}
                key={index}
                className={`flex dark:text-zinc-300 text-black py-4 px-2 rounded-sm hover:bg-zinc-300/10 transition-colors cursor-pointer ${bottomBorder} justify-between`}
              >
                <span className="p-2 hidden sm:block text-md dark:text-zinc-300/40 text-black/40">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span className="text-md p-2 sm:w-58 w-64 text-ellipsis overflow-hidden text-nowrap">
                  {obj.title}
                </span>
                <span className="text-xs hidden sm:flex justify-center items-center tracking-tight uppercase p-2 border border-zinc-300/30 rounded-lg">
                  {tag}
                </span>
                <span className="p-2 text-sm hidden sm:block text-gray-900/40 dark:text-zinc-300/50">
                  {obj.date}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
function Pursuit() {
  return (
    <div className="">
      <Table
        header={["Interest", "Years I have been doing"]}
        data={PursuitData}
      ></Table>
      <div className="text-black dark:text-zinc-50/60 my-10 ">
        Follow me on <UnderLineLink text="x" type="normal" hrefValue="https://x.com/01_anra"></UnderLineLink>, to
        see my trial and error.
      </div>
    </div>
  );
}
