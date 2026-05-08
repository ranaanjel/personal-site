import Image from "next/image";

import Mode from "@/app/_components/mode"
import {ModeDarkChange, ModeLightChange} from "@/app/_components/backgroundEffect";

export default function Home() {
  return (
    <div className="h-[150vh] relative flex flex-col flex-1 items-center justify-center dark:bg-zinc-50 bg-black">
      <ModeDarkChange></ModeDarkChange>
      <ModeLightChange></ModeLightChange>
     
      <Mode></Mode>

    </div>
  );
}

