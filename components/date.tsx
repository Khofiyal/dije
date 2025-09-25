"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Timer from './timer'

import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Separator } from "./ui/separator"

function Date() {

  return (
    <div className=''>
        {/* Desktop */}
        <div className='hidden lg:flex lg:flex-col items-center lg:mt-40 lg:pb-10'>
        <Card className="bg-[#F9F5EC]">
            <CardContent>
                <div className="flex flex-col items-center text-[#1E1E1E] text-center w-[968px] h-210 z-0">
                    <div className="bg-[#72727180] rounded-t-4xl">
                        <Image
                            className="w-[968px] rounded-t-4xl opacity-70"
                            src="/timer.jpg"
                            alt="timer"
                            width={1920}
                            height={1080}
                        />
                    </div>
                    <div className="-mt-72 font-regular z-20">
                        <h1 className="text-white text-4xl font-semibold mb-14 text-shadow-lg">SAVE THE DATE</h1>
                        <Timer WeddingDate="2025-10-18T09:00:00+07:00"  />
                    </div>
                    <h1 className="mt-28 text-4xl text-[#9D8443] font-semibold font-regular uppercase">wedding ceremony</h1>
                    <div className="grid grid-cols-6 gap-4 mt-9 mx-48  font-regular">
                        <div className="col-span-2 -mt-1 items-center text-[#9D8443]">
                            <h1 className="text-2xl font-semibold italic ">Saturday</h1>
                            <h1 className="text-7xl font-semibold">18</h1>
                            <h1 className="text-2xl font-semibold italic">October 2025</h1>
                        </div>
                        <div className="">
                            <Separator orientation="vertical" className="flex bg-black" />
                        </div>
                        <div className="col-span-3 my-auto -ml-14">
                            <h1 className="text-lg text-left text-[#3E3E3E]">Jl. Sisingamangaraja No.69c, Kota Tinggi, Kec. Pekanbaru Kota, Kota Pekanbaru, Riau 28156</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-9 mt-5 font-regular items-center mx-30">
                         <div className="">
                            <h1 className="text-2xl text-[#3E3E3E] font-semibold uppercase mb-5">ceremony</h1>
                            <h1 className="text-2xl text-[#3E3E3E]">09.00 - 11.30 WIB</h1>
                        </div>
                        <div>
                            <Image 
                                className="mx-auto h-28"
                                src="/vector.png"
                                alt=""
                                width={12}
                                 height={134}
                            />
                        </div>
                        <div>
                            <h1 className="text-2xl text-[#3E3E3] font-semibold uppercase mb-5">Reception</h1>
                            <h1 className="text-2xl text-[#3E3E3E] text-nowrap">12.30 WIB - Onwards</h1>
                        </div>
                    </div>
                    <Link href={"https://maps.app.goo.gl/ZjDx8mp7HAEAeChn8?g_st=ipc"} target='_blank'>
                        <Button
                        className="mt-5 h-13 w-180 font-regular text-xl font-semibold bg-white border border-[#9D8443] text-[#9D8443] hover:bg-[#9D8443] hover:text-white rounded-xl"
                        variant="primary"
                        >
                            Open Maps
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
        </div>

        {/* Mobile */}
        <div className='flex flex-col lg:hidden '>
            <Card className="bg-[#F9F5EC] w-87 h-121 mx-auto">
                <CardContent>
                    <div className="items-center text-[#1E1E1E] text-center">
                        <div className="bg-[#72727180] rounded-t-4xl z-10">
                            <Image
                                className="w-full h-40 rounded-t-4xl opacity-70 z-10 mc-"
                                src="/timer.jpg"
                                alt="timer"
                                width={1920}
                                height={1080}
                            />
                        </div>
                        <div className="flex flex-col -mt-36 font-regular z-20">
                            <h1 className="text-white text-xl font-semibold mb-5 text-shadow-lg z-30">SAVE THE DATE</h1>
                            <Timer WeddingDate="2025-10-18T09:00:00+07:00"  />
                        </div>
                        <h1 className="mt-12 text-xl text-[#9D8443] font-semibold font-regular uppercase">wedding ceremony</h1>
                        <div className="grid grid-cols-6 gap-4 mt-5 mx-4  font-regular">
                            <div className="col-span-2 -mt-1 text-center items-center text-[#9D8443] space-y-1">
                                <h1 className="text-sm font-semibold italic ">Saturday</h1>
                                <h1 className="text-3xl font-semibold">18</h1>
                                <h1 className="text-sm font-semibold italic">October 2025</h1>
                            </div>
                            <div className="">
                                <Separator orientation="vertical" className="flex bg-black" />
                            </div>
                            <div className="col-span-3 my-auto -ml-8">
                                <h1 className="text-xs text-left text-[#3E3E3E]">Jl. Sisingamangaraja No.69c, Kota Tinggi, Kec. Pekanbaru Kota, Kota Pekanbaru, Riau 28156</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-2 font-regular items-center mx-6">
                            <div className="flex flex-col">
                                <h1 className="text-md text-[#3E3E3E] font-semibold uppercase mb-2">ceremony</h1>
                                <h1 className="text-xs text-[#3E3E3E]">09.00 - 11.30 WIB</h1>
                            </div>
                            <div>
                                <Image 
                                    className="mx-auto h-24 w-2"
                                    src="/vector.png"
                                    alt=""
                                    width={12}
                                    height={134}
                                />
                            </div>
                            <div className='flex flex-col -ml-3'>
                                <h1 className="text-md text-[#3E3E3] font-semibold uppercase mb-2">Reception</h1>
                                <h1 className="text-xs text-nowrap text-[#3E3E3E]">12.30 WIB - Onwards</h1>
                            </div>
                        </div>
                        <Link href={"https://maps.app.goo.gl/ZjDx8mp7HAEAeChn8?g_st=ipc"} target='_blank' className='flex flex-col items-center'>
                        <Button
                        className="mt-5 h-8 w-70 font-regular text-md font-semibold bg-white border border-[#9D8443] text-[#9D8443] hover:bg-[#9D8443] hover:text-white rounded-md"
                        variant="primary"
                        >
                            Open Maps
                        </Button>
                    </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default Date