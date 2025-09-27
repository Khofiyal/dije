import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram } from 'lucide-react';

const Bride = () => {
  return (
    <div className="">

        {/* Desktop */}
        <div className='hidden lg:grid lg:grid-cols-5 gap-4 items-center mt-30 pb-10 ml-60 mr-60'>
        <div className="col-span-2">
            <Image
            className=""
            src="/framecw.png"
            alt="The groom"
            width={1920}
            height={1080}
            />
            <div className="flex flex-col items-center text-[#1E1E1E] z-20 text-center">
                <h1 className="text-3xl font-title mb-6">
                    The Groom
                </h1>
                <h1 className="text-4xl font-regular font-semibold justify-center mb-4">
                     Adrian Tawakal
                </h1>
                <h1 className="text-xl font-regular mx-8 mb-4">
                    Anak pertama dari Bapak H. Syafrul, S.E. dan Ibu Soikhatul Masruroh
                </h1>
                <h1 className="text-xl font-regular mx-10 mb-4 italic">
                    First son of Mr. H. Syafrul, S.E. and Mrs. Soikhatul Masruroh
                </h1>
                <Link href="https://www.instagram.com/adriantawakal/" className="text-md font-regular mx-18 mb-4">
                    <Instagram className="inline -mt-1 mr-2 stroke-2" size={20}/>
                    adriantawakal
                </Link>
            </div>
        </div>
        <div className="">
            <Image
            className="mx-auto -mt-48"
            src="/love.png"
             alt="love"
            width={99}
            height={109}
            />
        </div>
        <div className="col-span-2">
            <Image
            className=""
            src="/framecwk.png"
            alt="The Bride"
            width={1920}
            height={1080}
            />
            <div className="flex flex-col items-center text-[#1E1E1E] z-20 text-center text">
                <h1 className="text-3xl font-title mb-6">
                    The Bride
                </h1>
                <h1 className="text-4xl font-regular font-semibold justify-center mb-4">
                    Diajeng Fathisyahana
                </h1>
                <h1 className="text-xl font-regular mx-10 mb-4">
                    Anak kedua dari Bapak Syafnil Buchari dan Ibu Emmy
                </h1>
                <h1 className="text-xl font-regular mx-14 mb-4 italic">
                    Second daughter of Mr. Syafnil Buchari and Mrs. Emmy
                </h1>
                <Link href="https://www.instagram.com/diajengftsyhn_/" className="text-md font-regular mx-18 mb-4">
                    <Instagram className="inline -mt-1 mr-2 stroke-2" size={20}/>
                    diajengftsyhn_
                </Link>
            </div>
        </div>
        </div>

        {/* Mobile */}
        <div className='flex flex-col lg:hidden items-center mt-30 pb-10 '>
            <div className="col-span-2">
            <Image
            className="px-14"
            src="/framecw.png"
            alt="The groom"
            width={1920}
            height={1080}
            />
            <div className="flex flex-col items-center text-[#1E1E1E] z-20 text-center px-6">
                <h1 className="text-xl font-title mb-6">
                    The Groom
                </h1>
                <h1 className="text-2xl font-regular font-semibold justify-center mb-4">
                     Adrian Tawakal
                </h1>
                <h1 className="text-sm font-regular mx-10 mb-4">
                    Anak pertama dari H. Bapak Syafrul, S.E. dan Ibu Soikhatul Masruroh
                </h1>
                <h1 className="text-sm font-regular mx-10 mb-4 italic">
                    First son of Mr. H. Syafrul, S.E. and Mrs. Soikhatul Masruroh
                </h1>
                <Link href="https://www.instagram.com/adriantawakal/" className="text-sm font-regular mx-18 mb-4">
                    <Instagram className="inline -mt-1 mr-2 stroke-2" size={16}/>
                    adriantawakal
                </Link>
            </div>
        </div>
        <div className="">
            <Image
            className="mx-auto my-10"
            src="/love.png"
             alt="love"
            width={99}
            height={109}
            />
        </div>
        <div className="col-span-2">
            <Image
            className="px-14"
            src="/framecwk.png"
            alt="The Bride"
            width={1920}
            height={1080}
            />
            <div className="flex flex-col items-center text-[#1E1E1E] z-20 text-center text">
                <h1 className="text-xl font-title mb-6">
                    The Bride
                </h1>
                <h1 className="text-2xl font-regular font-semibold justify-center mb-4">
                    Diajeng Fathisyahana
                </h1>
                <h1 className="text-sm font-regular mx-16 mb-4">
                    Anak kedua dari Bapak Syafnil Buchari dan Ibu Emmy
                </h1>
                <h1 className="text-sm font-regular mx-16 mb-4 italic">
                    Second daughter of Mr. Syafnil Buchari and Mrs. Emmy
                </h1>
                <Link href="https://www.instagram.com/diajengftsyhn_/" className="text-sm font-regular mx-18 mb-4">
                    <Instagram className="inline mr-2 stroke-2" size={16}/>
                    diajengftsyhn_
                </Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Bride