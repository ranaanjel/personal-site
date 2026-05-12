"use client"
import { useEffect } from "react"

export default function Layout({children}:Readonly<{children:React.ReactNode}>) {


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