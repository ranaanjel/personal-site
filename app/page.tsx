import Image from "next/image";

import Mode from "@/app/_components/mode";
import {
  ModeDarkChange,
  ModeLightChange,
} from "@/app/_components/backgroundEffect";
import { UnderLineLink, UnderWavyLineLink } from "./_components/link";
import HeroSection from "./_components/heroSection";
import { Paragraph } from "./_components/paragraph";
import MenuSection from "./_components/menuSection";
import ProjectSection from "./_components/projectSection";
import Footer from "./_components/footer";
import BannerText from "./_components/bannertext";

export default function Home() {
  return (
    <div className="h-full w-full relative flex flex-col flex-1 items-center justify-center dark:bg-zinc-100 bg-black select-none ">
      <ModeDarkChange></ModeDarkChange>
      <ModeLightChange></ModeLightChange>

      <div className="m-auto min-w-140 w-1/3 z-10">
        <HeroSection></HeroSection>
        {/* <UnderWavyLineLink text={"X"}></UnderWavyLineLink> */}
        {/* // menu section  */}
        <MenuSection></MenuSection>

        {/* // project section  */}
        <ProjectSection></ProjectSection>
        {/* // footer section  */}
        <Footer></Footer>
      </div>

      <Mode></Mode>
      <BannerText></BannerText>
    </div>
  );
}
