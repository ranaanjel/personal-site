export const Tag = ["business", "software", "hardware","product","saas","productivity","rant", "resources"]

export const BlogData = [{
    date : "15/05/2026",
    title: "important weblinks for builders ",
    link : "/blogs/weblinks",
    tag  : "resources"
},]

export const PursuitData:{ value: string; year: number; active: boolean; emoji: string }[] = [{
    value : "lifting / calesthenics", year : 3, active : true, emoji:"🏋️"
}, {
    value : "building softwares", year : 2 , active:true, emoji:"💻"
}, {
    value : "tinkering with hardwares", year :0, active:true, emoji:"📟"
}, {
    value : "sketching", year : 6 , active : false , emoji:"✏️"
}]

export const ProjectData:{
    imgSrc:string, header:string, liveLink:string, github?:string, description:string, tags:string[]
}[] = [{
    imgSrc:"/figma.png", header:"PWA e-commerce delivery app", liveLink:"https://www.figma.com/design/g9hU0sR02bwOyJsaFF3QRT/application-pwa?node-id=35-2&t=ACZFfLMfCXynZiJy-1", github:"https://github.com/ranaanjel/ecommerce-pwa", description:"Had to take down, it was costing me $100 per month with few users, there is a figma link though", tags:["MongoDB", "Figma", "React", "Nodejs", "Websocket", "Nextjs", "Sqlite", "AWS"]
},{
    imgSrc:"/automention.gif", header:"Obsidian Plugin", liveLink:"", github:"https://github.com/ranaanjel/obsdn-plug-mention-link", description:"Replicating the notion's link mention", tags:["Typescript", "Linux commands", "local-development"]
},{
    imgSrc:"/qc.png", header:"Landing page for quikcrats", liveLink:"https://quikcrats.com", github:"https://github.com/ranaanjel/landing-page-qc", description:"Single SPA for our target customers", tags:["Typescript", "Nextjs", "Cloudflare"]
}, ]