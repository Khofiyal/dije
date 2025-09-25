"use client";

import Image from "next/image";
import React from "react";
import { Code } from "./ui/code";

function WeddingGift() {
    return (
        <div className='flex flex-col items-center justify-center font-regular lg:mt-48 mt-20'>
            <Image
                className="lg:w-screen z-0 h-screen object-bottom-center object-cover"
                src="/gift.png"
                alt="gift"
                width={1920}
                height={1080}
            />
            <h2 className="lg:text-4xl text-3xl font-bold lg:mb-16 mb-10 uppercase text-white lg:-mt-[550px] -mt-180 z-10 text-shadow-lg items-center">Wedding Gift</h2>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start lg:gap-16 gap-7 font-regular">
                <span className="flex flex-col justify-center items-center bg-black/50 text-white text-3xl lg:text-5xl lg:w-96 w-70 lg:py-5 shadow-lg rounded-lg backdrop-blur-sm lg:h-72 h-58 lg:px-5">
                    <Image
                        className="lg:w-72 w-60 z-0"
                        src="/BCA.png"
                        alt="gift"
                        width={1920}
                        height={1080}
                    />
                    <small className="lg:text-2xl text-xl text-white semi-bold text-center">
                        <Code className="mt-1 lg:mt-0" variant={"custom"} size={"custom"} showCopyButton>7165040996</Code>
                    </small>
                    <small className="lg:text-2xl text-xl text-white semi-bold text-center lg:mt-3">
                        Adrian Tawakal
                    </small>
                </span>
                <div className="flex flex-col justify-center items-center bg-black/50 text-white text-3xl lg:text-5xl lg:w-96 lg:py-5 shadow-lg rounded-lg backdrop-blur-sm lg:h-72 h-58 px-5">
                    <Image
                        className="lg:w-72 w-55 z-0 -mt-5"
                        src="/Mandiri.png"
                        alt="gift"
                        width={1920}
                        height={1080}
                    />
                    <small className="text-2xl text-white semi-bold text-center">
                        <Code variant={"custom"} size={"custom"} showCopyButton>1630004382316</Code>
                    </small>
                    <small className="lg:text-2xl text-xl text-white semi-bold text-center lg:mt-3">
                        Diajeng Fathisyahana
                    </small>
                </div>
            </div>
        </div>
    );
}

export default WeddingGift;