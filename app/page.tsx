import Image from "next/image";

import Mode from "@/app/_components/mode"
import {ModeDarkChange, ModeLightChange} from "@/app/_components/backgroundEffect";
import { UnderLineLink, UnderWavyLineLink } from "./_components/link";
import HeroSection from "./_components/heroSection";
import { Paragraph } from "./_components/paragraph";

export default function Home() {
  return (
    <div className="h-screen w-screen relative flex flex-col flex-1 items-center justify-center dark:bg-zinc-100 bg-black ">
      <ModeDarkChange></ModeDarkChange>
      <ModeLightChange></ModeLightChange>

      <div className="m-auto min-w-140 w-1/3 z-10">
         <HeroSection></HeroSection> 
       
      {/* <UnderWavyLineLink text={"X"}></UnderWavyLineLink> */}

        {/* // menu section - 2026 , about , pursuit , blogs  */}

        {/* // project section  */}

        {/* // footer section  */}

      </div>
     
      <Mode></Mode>
    </div>
  );
}

