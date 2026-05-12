import Mode from "@/app/_components/mode";
import {
  ModeDarkChange,
  ModeLightChange,
} from "@/app/_components/backgroundEffect";
import HeroSection from "./_components/heroSection";
import MenuSection from "./_components/menuSection";
import ProjectSection from "./_components/projectSection";
import Footer from "./_components/footer";
import BannerText from "./_components/bannertext";


export default function Home() {

  return (
    <div  className=" scroll-smooth w-full relative flex flex-col flex-1 items-center justify-center dark:bg-zinc-50 bg-blue-200 select-none ">
      
      <div className="relative z-1">
           <ModeDarkChange></ModeDarkChange>
          <ModeLightChange></ModeLightChange>
        </div>
      <div className="z-10 max-h-screen overflow-scroll no-scrollbar"  >
        <div className="md:min-w-140 md:w-1/3 m-auto w-full px-6 flex flex-col gap-6">
           <HeroSection ></HeroSection>
        {/* <UnderWavyLineLink text={"X"}></UnderWavyLineLink> */}
        {/* // menu section  */}
        <MenuSection></MenuSection>
        {/* // project section  */}
        <ProjectSection></ProjectSection>
        {/* // footer section  */}
        <Footer></Footer>
        </div>
       
      </div>
   
     
      <BannerText></BannerText>

      <Mode></Mode> 
    </div>
  );
}
