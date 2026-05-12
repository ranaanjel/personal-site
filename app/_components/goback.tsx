"use client"
import { ArrowLeft } from "lucide-react"
import { useRouter , redirect } from "next/navigation"

export default function GoBack() {
    let router = useRouter();

    return <span id="goback" onClick={() => {
        router.back()
    }} className="cursor-pointer">
        <ArrowLeft></ArrowLeft>
    </span>
}