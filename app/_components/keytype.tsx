"use client";

import { use, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(TextPlugin, useGSAP);

export default function KeyTypeAnimation({ text }: { text?: string }) {
  let cursorRef = useRef<HTMLSpanElement>(null);
  let textRef = useRef<HTMLSpanElement>(null);

  let words = ["indie builder.", "tech nerd.", "hardware enthusiast."];

  useGSAP(() => {
    let t1 = gsap.timeline({ repeat: -1, duration: 0.3 }).to(cursorRef.current, {
      opacity: 0,
      ease: "sine",
    });

   let t2 =  gsap
      .timeline({ repeat: -1, repeatDelay: 0.5 })
      .to(textRef.current, {
        text: {
          value: words[0],
          type: "diff",
        },
        duration: 1.5,
        ease: "power2.inOut",
      })
      .to(textRef.current, {
        text: {
          value: "",
          type: "diff",
          rtl: true,
        },
        duration: 0.5,
        ease: "power1.out",
      })
      .to(textRef.current, {
        text: {
          value: words[1],
          type: "diff",
        },
        duration: 1.5,
        ease: "power2.inOut",
      })
      .to(textRef.current, {
        text: {
          value: "",
          type: "diff",
          rtl: true,
        },
        duration: 0.5,
        ease: "power1.out",
      })
      .to(textRef.current, {
        text: {
          value: words[2],
          type: "diff",
        },
        duration: 1.5,
        ease: "power2.inOut",
      })
      .to(textRef.current, {
        text: {
          value: "",
          type: "diff",
          rtl: true,
        },
        duration: 0.5,
        ease: "power1.out",
      });

      return function () {
        t2.revert();
        t1.revert();
      }
  });

  return (
    <div className="relative inline">
      <span ref={textRef} className="text-xl ref={textRef} pl-2"></span>
      <span ref={cursorRef} className="font-extrabold text-xl ml-[0.5ch]">
        |
      </span>
    </div>
  );
}

export function AnimateTextLightBulb({ text }: { text: string }) {
  let textRef = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    gsap.to(textRef.current, {
      ease: "power1.out",
      duration: 3,
      text: {
        value: text,
        type: "diff",
        delimiter: " ",
      },
    });
  });
  return (
    <div className="relative inline my-2">
      <span
        ref={textRef}
        className="text-lg text-gray-800 dark:text-zinc-300/70"
      ></span>
      {/* <span className="font-extrabold text-xl ml-[0.5ch] animate-pulse">💡</span> */}
    </div>
  );
}
