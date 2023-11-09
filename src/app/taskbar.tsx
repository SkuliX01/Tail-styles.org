import React from "react";


export default function Taskbar() {
    return(
    <div className='w-full h-[65px] bg-[#171010] rounded-xl flex items-center justify-center'>
        <button className='bg-[#4E9F3D] mr-3 w-16 h-10 rounded-xl text-white animate-Fadeout hover:animate-Fadein'>Home</button>
        <button className='bg-[#4E9F3D] mr-3 w-16 h-10 rounded-xl text-white animate-Fadeout hover:animate-Fadein'>Styles</button>
        <button className='bg-[#4E9F3D] mr-3 w-16 h-10 rounded-xl text-white animate-Fadeout hover:animate-Fadein'>About</button>
    </div>
    )
}