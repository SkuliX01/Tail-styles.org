"use client"

import { Oval } from "react-loader-spinner"


export default function Loading() {
    return(
        <div className="text-center mt-[256px] flex justify-center align-center">
            <Oval width={185} height={185} color="#0174BE" secondaryColor="#87C4FF"/>
        </div>
    )
}