"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react"

import GuestBook from "@/components/guestbook";
import WeddingGift from "@/components/weddinggift";
import Gallery from "@/components/gallery";
import WeddingMessage from "@/components/message";
import Story from "@/components/story";
import Hero from "@/components/hero";
import Quotes from "@/components/quotes";
import Bride from "@/components/bride";
import Date from "@/components/date";
import Cover from "@/components/cover";

import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

import { useRef, useEffect, useState } from "react";

export default function Home() {

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
     if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    document.addEventListener('click', playAudio, { once: true });
    setIsPlaying(true);

    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen">
        <div className="flex flex-col bg-[#F5E6BE]">
            <div className='w-full flex flex-col bg-[url("/pucuk.png")] bg-repeat-y bg-contain'>
                <Cover />
                <div className="absolute z-40">
                    <audio ref={audioRef} src="/lagu.mp3" />
                    <Button
                    onClick={togglePlayPause}
                    className="fixed bottom-4 right-4 rounded-full w-11 h-11 bg-[#F9F5EB] hover:bg-[#c1c1c1] border-4 border-[#F2C94C] z-50 ">
                        {
                            isPlaying ? (
                                <Pause className="w-20 h-20 fill-[#927248]" size={25} color="" />
                              ) : (
                                <Play className="w-20 h-20 fill-[#927248]"size={25} color="" />
                            )
                        }
                    </Button>
                </div>
                <Hero />
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="flex flex-col items-center">
                    <Quotes />
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="">
                    <Bride />
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col">
                    <Date />
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="bg-[#F9F5EC] w-full lg:h-[637px] mt-30  py-15 pb-15 lg:px-40">
                    <div className="flex flex-col lg:grid lg:grid-cols-2">
                    <div className="mx-auto">
                        <Image 
                        className="object-cover lg:object-contain object-center h-52 lg:h-120 items-center justify-center"
                        src="/story.png"
                        alt=""
                        width={472}
                        height={477}
                        />
                    </div>
                    <div className="font-regular mt-10 lg:mt-0 mx-5">  
                        <Story />
                    </div>
                    </div>
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="mt-40 items-center">
                    <GuestBook />
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="mb-25 lg:mt-0">
                    <WeddingGift />
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="lg:mt-40 mt-30">
                    <Gallery />
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="lg:mt-30 mt-10">
                    <WeddingMessage />
                </motion.div>
                <div className="flex flex-col mt-20">
                    <div className="relative">
                        <Image
                        className="absolute object-cover z-10 h-screen lg:-mt-0 "
                        src="/cover1.jpg"
                        alt="adrian-diajeng"
                        width={1920}
                        height={1080}
                        />
                        <Image
                            className="absolute lg:flex h-screen z-10"
                            src="/effect2.png"
                            alt=""
                            width={1920}
                            height={1080}
                        />
                        <Image
                            className="absolute lg:flex h-screen z-10"
                            src="/effect3.png"
                            alt=""
                            width={1920}
                            height={1080}
                        />
                    </div>
                    <div className="flex flex-col items-center mb-20 text-[#4F4F4F] z-20 text-center mt-145 sm:mt-160 lg:mt-87">
                            <h1 className="lg:text-6xl text-xl mx-10 font-regular justify-center md:mx-40 lg:mb-8 mb-6 uppercase">
                                Thank You for Your Attendance and Support
                            </h1>
                            <h1 className="lg:text-3xl text-md font-regular mx-10 sm:mx-20 md:mx-40 lg:mx-20 lg:mb-16 mb-4">
                                With hearts full of love, we warmly invite you to join us, share in our joy, and bless the beginning of our new chapter.
                            </h1>
                            <h1 className="lg:text-6xl text-[44px] font-title">
                                Adrian  &  Diajeng
                            </h1>
                    </div>
                </div>
                {/* Footer */}
                <div className="flex flex-col bg-white w-full items-center font-regular lg:py-3 py-3 lg:-mt-12 -mt-15">
                    <Link href="https://www.devhouse.id/">
                    <h1 className="text-[#1E1E1E] lg:text-xs text-[8px] text-center">Powered by</h1>
                    <Image
                    className="items-center lg:w-[137px] w-20"
                    src="/DevhouseB.png"
                    alt="DevHouse"
                    width={1972}            
                    height={376}
                    />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}
