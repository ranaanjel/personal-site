import Image from "next/image"

export default function DefaultProjectCard({imgSrc, header, liveLink, github, description, tags}:{
    imgSrc:string, header:string, liveLink:string, github?:string, description:string, tags:string[]
}) {
    return <div className="flex gap-2 space-between mt-4">
        <div className="w-1/3 py-2">
            <Image src={imgSrc} height={400} alt="banner image" width={400} className="h-32 border w-full object-fill"></Image>
        </div>
        <div className="flex flex-col gap-2">
            <div>

            </div>
            <div>

            </div>
            <div>
                <div className="text-sm">Technologies Used:</div>
                <div>

                </div>
            </div>

        </div>
    </div>
}