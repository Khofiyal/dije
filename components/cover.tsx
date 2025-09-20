"use client";

import React from 'react'

import { Dialog, DialogContent, DialogTitle } from "./ui/dialog"
import { Button } from "./ui/button"

import Image from "next/image"

import { useParams } from 'next/navigation'

const Cover = () => {
  const params = useParams();

  const [open, setOpen] = React.useState(true);
  return (
    <Dialog open={open}>
                <DialogContent>
                    <DialogTitle className='hidden'></DialogTitle>
                    <div className="max-h-screen">
                        <Image
                            className="hidden lg:flex bg-white z-0 h-screen items-center lg:object-cover"
                            src="/cover1.jpg"
                            alt="adrian-diajeng"
                            width={1920}
                            height={1080}
                        />
                        <Image
                            className="flex lg:hidden h-screen bg-white z-0 items-center object-cover"
                            src="/herom.png"
                            alt="adrian-diajeng"
                            width={1920}
                            height={1080}
                        />
                            
                        <Image
                            className="hidden lg:flex -mt-[643px] lg:-mt-[730px] h-screen object-cover object-bottom z-10"
                            src="/effect1.png"
                            alt=""
                            width={1920}
                            height={1080}
                        />
                        <Image
                            className="flex lg:hidden -mt-200 lg:mt-0 h-screen w-screen z-10 object-cover object-bottom"
                            src="/effect1m.png"
                            alt=""
                            width={402}
                            height={470}
                        />
                    </div>
                    <div className="flex flex-col items-center text-center mb-20 text-[#4F4F4F] -mt-85 z-20">
                        <h1 className="text-2xl font-regular font-semibold justify-center mb-10">
                            The Wedding of
                        </h1>
                        <h1 className="lg:text-7xl text-5xl font-title mb-6">
                            Adrian  &  Diajeng
                        </h1>
                        <h1 className="lg:text-4xl text-lg font-regular mb-2">
                            Dear
                        </h1>
                        <h1 className="lg:text-3xl text-lg font-regular">
                            {params.id?.toString().replaceAll("%2B", "and").replaceAll("%20", " ")}
                        </h1>
                        
                        <Button
                        className='bg-[#FFF9EA] text-[#FACB3D] hover:bg-[#FFF9EA] hover:text-[#FACB3D] ring-0 border border-[#FACB3D] mt-8 font-regular lg:text-xl text-lg p-5 lg:w-100 h-12 uppercase font-semibold'
                        onClick={() => setOpen(false)}>Open Invitation</Button>
                    </div>
                </DialogContent>
            </Dialog>
  )
}

export default Cover