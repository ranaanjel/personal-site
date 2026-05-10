import { ProjectData } from "../_utils/data";
import DefaultProjectCard from "./projectcard";

export default function ProjectSection() {

    return <div className=" dark:text-zinc-300 text-black  py-6 ">

        <div className="font-medium text-2xl">
            Projects I built
        </div>
        <div className="flex flex-col gap-4"> 

            {
                ProjectData.map((item, index) => {
                    let imgSrc = item.imgSrc
                    let header = item.header
                    let liveLink = item.liveLink 
                    let github = item?.github; 
                    let description = item.description
                    let tags= item.tags;

                    return <div key={index}>
                        <DefaultProjectCard imgSrc={imgSrc} header={header} 
                    liveLink={liveLink} github={github} description={description} tags={tags}>
                    </DefaultProjectCard>
                    <hr className="my-4 border-gray-300 dark:border-zinc-700" />
                    </div>
                })
}

        </div>

    </div>
}