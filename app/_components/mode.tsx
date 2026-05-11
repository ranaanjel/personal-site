"use client";

import { useCallback, useRef, useEffect, useState } from "react";
import { Moon, Sun } from "@/app/_svg_component/mode";

// on hover animation
// on click images and the theme changes  // changing the state

export default function Mode() {
  const [dark, setIsDark] = useState(true); //default is true

  const handleClick = useCallback(() => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    setIsDark(isDark);
    const elementBgLight = document.querySelector(".data-bg-l") as HTMLElement;
    const elementBgDark = document.querySelector(".data-bg-d") as HTMLElement;

    if (isDark) {
      elementBgLight.classList.add("bg-effect");
      elementBgDark.classList.remove("bg-effect");
    } else {
      elementBgDark.classList.add("bg-effect");
      elementBgLight.classList.remove("bg-effect");
    }

    console.log(dark, "dark", elementBgDark, elementBgLight);

    root.style.colorScheme = isDark ? "dark" : "light";
  }, []);

  return (
    <div
      onClick={handleClick}
      className="h-10 z-20 w-10 border-[0.5px] shadow-2xs transition-transform duration-300 ease-in-out hover:scale-95 shadow-zinc-500/50 rounded-full border-zinc-500/60 cursor-pointer fixed right-6 bottom-6 dark:bg-black bg-zinc-50 dark:text-zinc-50 text-gray-900"
    >
      {dark ? <Moon></Moon> : <Sun></Sun>}
    </div>
  );
}
