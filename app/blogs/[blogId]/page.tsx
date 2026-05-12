import { ModeDarkChange, ModeLightChange } from "@/app/_components/backgroundEffect";
import { BlogLink, BlogParagraph } from "@/app/_components/blogComponent";
import Footer from "@/app/_components/footer";
import GoBack from "@/app/_components/goback";
import Mode from "@/app/_components/mode";
import { blogDataArchive } from "@/app/_utils/blogData";


export default async function BlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  let { blogId } = await params;
  
//min-h-screen w-screen relative z-1 overflow-hidden items-center justify-center  dark:bg-zinc-100 bg-black select-none dark:text-zinc-300/70 text-black/70 
  return (
    <div className="min-h-screen w-screen md:p-0 px-6 relative z-1 overflow-hidden items-center justify-center  dark:bg-zinc-100 bg-black select-none dark:text-zinc-300/70 text-black/70 ">
        <div className="relative z-1">
           <ModeDarkChange></ModeDarkChange>
          <ModeLightChange></ModeLightChange>
        </div>
        <div className="sm:w-1/3 m-auto sm:min-w-140 pt-10 z-20 relative">
    
            <div className="flex justify-between items-center dark:text-zinc-300/70 text-black/70">
                <span className="text-4xl">{blogId}</span>
                <GoBack></GoBack>
            </div>
            <div className="my-10">
                {
                  (blogDataArchive as Record<string, any[]>)[blogId].map((item: any, index) => 
                     {
                      if(item.type == "pi") {
                    return <div key={index}>                      

                    <BlogParagraph inline={true} text={item.value} type="normal"></BlogParagraph>

                    </div>
                      }
                      if(item.type == "pb") {

                    return <div key={index}>                      

                    <BlogParagraph inline={false} text={item.value} type="normal"></BlogParagraph>

                    </div>
                      }
                      if(item.type== "li") {
                         return  <div key={index}>

                          <BlogLink text={item.value} hrefValue={item.link} inline={true}></BlogLink>
          
                    </div>
                      }
                      if(item.type == "lb") {
                        return <div key={index}>                      
                           <BlogLink text={item.value} hrefValue={item.link} inline={false}></BlogLink>
                    </div>
                      }

                      return <div key={index}></div>
                   }
                  )
                }
            </div>
            <hr className="my-8 border-gray-300 dark:border-zinc-700" />
            <Footer></Footer>
        </div>
        <Mode></Mode>
    </div>
  );
}
