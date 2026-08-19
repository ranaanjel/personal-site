import KeyTypeAnimation, { AnimateTextLightBulb } from "./keytype";
import { UnderWavyLineLink } from "./link";
import { Paragraph } from "./paragraph";

export default function HeroSection() {
  return (
    <div className="  h-screen flex flex-col items-start md:pt-45 mt-20 dark:text-zinc-50 text-gray-900 z-10 ">
      <h1 className="text-2xl my-3">Anjel</h1>
      <div className="dark:text-zinc-300/70 text-zinc-800 mb-6">
        <span className="text-xl">26,</span>
        <KeyTypeAnimation></KeyTypeAnimation>
      </div>
      <Paragraph
        type="normal"
        text="Always wanted to be a footballer. Playing in the big leagues, chasing something bigger than myself. Unrealistic maybe, but that mindset never really left."
        opacity={70}
      ></Paragraph>

      <p
        className={`my-3 leading-normal z-10  text-zinc-800/70 dark:text-zinc-300/70 text-lg `}
      >
        I’ve always had the urge to build things and create something of my own.
        Started{" "}
        <UnderWavyLineLink
          hrefValue="https://www.quikcrats.com"
          text="businesses"
        ></UnderWavyLineLink>{" "}
        early (
        <UnderWavyLineLink
          hrefValue="https://www.instagram.com/ijwifoods/"
          text="brick"
        ></UnderWavyLineLink>{" "}
        and mortar), learned graphic design, taught myself coding, explored
        systems, servers, design, and software — whatever sparked my curiosity.
        Mostly self-taught, experimenting, breaking things, and rebuilding them
        better.
      </p>

      <Paragraph
        type="normal"
        text="I’m an avid learner, but more than that, I’m obsessed with leverage through the internet."
        opacity={70}
      ></Paragraph>

      <Paragraph
        type="normal"
        text="Distribution on the internet ummm ;>"
        opacity={70}
      ></Paragraph>
      <p
        className={`my-3 leading-normal z-10  text-zinc-800/70 dark:text-zinc-300/70 text-lg `}
      >
        Long term, I want to build consumer hardware — products that feel
        futuristic but genuinely useful. But hardware needs serious R&D, and R&D
        needs capital. So for now, I’m deep in the software world,{" "}
        <UnderWavyLineLink
          hrefValue="https://x.com/01_anra"
          text="building"
        ></UnderWavyLineLink>
        , learning, and shipping toward that bigger vision.
      </p>
      <AnimateTextLightBulb text="Build. Learn. Ship. Repeat."></AnimateTextLightBulb>
    </div>
  );
}

//
//
//
//
//
