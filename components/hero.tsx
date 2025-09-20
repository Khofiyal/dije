import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
        <div className="flex flex-col ">
            <div className='hidden md:flex h-screen bg-[url("/cover1.jpg")] bg-cover bg-center'>
            {/* <Image
                className="hidden lg: bg-white z-0 h-screen items-center lg:object-cover"
                src="/cover1.jpg"
                alt="adrian-diajeng"
                width={1920}
                height={1080}
            /> */}
            <Image
                className="hidden md:flex object-cover object-bottom z-0 h-screen w-screen"
                src="/effect1.png"
                alt=""
                width={1920}
                height={1080}
            />
            </div>
            <div className='flex md:hidden h-screen bg-[url("/herom.png")] bg-cover bg-top'>
            {/* <Image
                className="flex lg:hidden h-screen bg-white z-10 object-cover"
                src="/herom.png"
                alt="adrian-diajeng"
                width={1920}
                height={1080}
            />             */}
            <Image
                className="absolute flexmd:hidden h-full object-cover object-bottom z-0 w-screen"
                src="/effect1m.png"
                alt=""
                width={402}
                height={470}
            />
            </div>
        </div>
        <div className="flex flex-col items-center text-center mb-20 text-[#4F4F4F]  -mt-70 z-20 ">
            <h1 className="text-2xl font-regular font-semibold justify-center mb-8 z-30">
                The Wedding of
            </h1>
            <h1 className="lg:text-6xl text-5xl font-title mb-6 z-30">
                Adrian  &  Diajeng
            </h1>
            <h1 className="lg:text-2xl text-lg font-regular z-30">
                Saturday
            </h1>
            <h1 className="lg:text-2xl text-lg font-regular z-30">
                18 &nbsp;&nbsp; / &nbsp;&nbsp; 10 &nbsp;&nbsp; / &nbsp;&nbsp; 2025
            </h1>
        </div>
    </div>
  )
}

export default Hero