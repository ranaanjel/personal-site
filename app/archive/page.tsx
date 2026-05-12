"use client"

import { ModeDarkChange, ModeLightChange } from "../_components/backgroundEffect";
import Footer from "../_components/footer";
import Mode from "../_components/mode";
import { archiveData } from "../_utils/data";
import GoBack from "../_components/goback";
import Link from "next/link";

export default function Page() {

    return <div className="min-h-screen w-screen sm:p-0 px-6 relative z-1 overflow-hidden items-center justify-center  dark:bg-zinc-100 bg-black select-none dark:text-zinc-300/70 text-black/70 ">
        
        <div className="relative z-1">
           <ModeDarkChange></ModeDarkChange>
          <ModeLightChange></ModeLightChange>
        </div>
        <div className="sm:w-1/3 m-auto sm:min-w-140 pt-10 z-10 relative">
    
            <div className="flex justify-between items-center">
                <span className="text-4xl">years</span>
                <GoBack></GoBack>
            </div>
            <div>
                a running archive of what i've been up to, year by year.
            </div>

            <div className="my-10 min-h-[50vh] ">
                {
                    archiveData.map((item,index) => {
                        return <div className="dark:hover:bg-zinc-300/10 hover:bg-black/10 cursor-pointer rounded-md border dark:border-zinc-50/50 border-black/50 p-4 " key={index}>
                            <div className="text-xl dark:hover:text-zinc-50">
                                <Link href={"/#year"} scroll={true}>{item.yearId}</Link>
                            </div>
                            <div>
                                {item.description}
                            </div>
                        </div>
                    })
                }
            </div>

      <hr className="my-8 border-gray-300 dark:border-zinc-700" />
            <Footer></Footer>
        </div>
        <Mode></Mode>
    </div>
}