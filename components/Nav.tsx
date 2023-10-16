import React from "react"
import Link from "next/link"

export default function Nav(){
    return(
        <header>
            <nav>
                <Link href = "/">Home</Link>
                <Link href = "/guest/about">About</Link>
            </nav>
        </header>
    )
}