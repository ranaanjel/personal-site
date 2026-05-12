"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function BannerText() {
  const itemRef = useRef<HTMLDivElement | null>(null);

  useGSAP(function () {
    let tl = gsap.timeline()

    tl.to(itemRef.current, { 
    scrollTrigger: {
        trigger: itemRef.current,
        toggleActions: "restart none none reset",
        onToggle : () => console.log("toggle"),
        // start : "top 80%" ,
        // end : "200% 100px" ,
        toggleClass : "bigtext",
    }} )

    return () => tl.revert();

  });

  return (
    <div className=" relative text-zinc-300  text-[140px] leading-tight font-medium tracking-wider overflow-hidden w-full flex justify-center h-52 border ">
      <div className="relative top-19 w-1/3 min-w-140 text-center z-2">
        A01Z
      </div>
      <div ref={itemRef} className="w-full h-full absolute  z-1">
      </div>
    </div>
  );
}
//  bg-linear-to-t from-yellow-500/90 from-10% via-orange-500/90  via-40% to-transparent to-80%