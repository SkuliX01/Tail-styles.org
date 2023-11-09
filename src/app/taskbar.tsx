import React from "react";
import Link from "next/link";

export default function Taskbar() {
    return(
    <div className='w-[75px] h-[65px] bg-[#171010] rounded-xl flex items-center justify-center'>
        <Link href="/"><button className='bg-[#39A7FF] mr-3 w-16 h-10 rounded-xl text-white animate-Fadeout hover:animate-Fadein'>Home</button></Link>
        <Link href="/Styles"><button className='bg-[#39A7FF] mr-3 w-16 h-10 rounded-xl text-white animate-Fadeout hover:animate-Fadein'>Styles</button></Link>
        <Link href="/About"><button className='bg-[#39A7FF] mr-3 w-16 h-10 rounded-xl text-white animate-Fadeout hover:animate-Fadein'>About</button></Link>
    </div>
    )
}