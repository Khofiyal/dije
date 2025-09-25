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
                    <div className="flex flex-col ">
                        <div className='hidden md:flex h-screen w-screen bg-[url("/cover1.jpg")] bg-cover bg-center'>
                            <Image
                                className="hidden md:flex object-cover object-bottom z-0 h-screen w-screen"
                                src="/effect1.png"
                                alt=""
                                width={1920}
                                height={1080}
                            />
                            </div>
                        <div className='flex md:hidden h-screen w-screen bg-[url("/herom.png")] bg-cover bg-top'>
                            <Image
                                className="absolute flexmd:hidden h-screen object-cover object-bottom z-0 w-screen"
                                src="/effect1m.png"
                                alt=""
                                width={402}
                                height={470}
                            />
                            </div>
                        </div>
                    <div className="flex flex-col items-center text-center mb-20 text-[#4F4F4F] -mt-85 z-20">
                        <h1 className="text-2xl font-regular font-semibold justify-center mb-10 z-20">
                            The Wedding of
                        </h1>
                        <h1 className="lg:text-7xl text-5xl font-title mb-6 z-20 whitespace-pre-wrap">
                        Diajeng  &  Adrian 
                        </h1>
                        <h1 className="lg:text-4xl text-lg font-regular mb-2 z-20">
                            Dear
                        </h1>
                        <h1 className="lg:text-3xl text-lg font-regular z-20">
                            {params.id?.toString().replaceAll("%2B", "and").replaceAll("%20", " ")}
                        </h1>
                        <Button
                        className='bg-[#FFF9EA] text-[#FACB3D] hover:bg-[#FFF9EA] hover:text-[#FACB3D] ring-0 border border-[#FACB3D] mt-8 font-regular lg:text-xl text-lg p-5 lg:w-100 h-12 uppercase font-semibold z-20'
                        onClick={() => setOpen(false)}>Open Invitation</Button>
                    </div>
                </DialogContent>
            </Dialog>
  )
}

export default Cover