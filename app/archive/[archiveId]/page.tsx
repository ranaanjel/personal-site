export default async function Page({params} : {params:Promise<{archiveId:string}>}) {

    let blogValue = await params;

    console.log(blogValue)


    return <div className="h-full w-full relative flex flex-col flex-1 items-center justify-center dark:bg-zinc-100 bg-black select-none ">
        {JSON.stringify(blogValue)}
    </div>
}

//next year to do 