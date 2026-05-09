export function UnderLineLink({text}:{text:string}) {
    return <div className="relative group">
        <a href="#" className="text-sm font-medium text-gray-900 dark:text-white">Hover me</a>
        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gray-900 dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </div>
} 

export function UnderWavyLineLink({text, hrefValue}:{text:string, hrefValue?: string}) {
    return  <a href={hrefValue} target="_blank" className="text-lg font-medium text-gray-900 underline decoration-wavy decoration-amber-600 hover:text-amber-400 dark:text-zinc-300/70">{text}</a>
} 