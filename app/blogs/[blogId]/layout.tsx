"use client"
import { useEffect } from "react"

export default function Layout({children}:{children:React.ReactElement}) {


    useEffect(() => {
        document.documentElement.style.colorScheme = "dark";
        document.documentElement.classList.add("dark");
    }, [])

    return <div>
        {
            children
        }
    </div>
}