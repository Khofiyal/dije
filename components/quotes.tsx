import React from 'react'
import Image from 'next/image'

const Quotes = () => {
  return (
    <div className='mt-20'>
        <Image
            className="hidden lg:flex w-[968px] h-[222px] rounded-xl opacity-75 z-0 items-center justify-center mx-auto"
            src="/quotes.jpg"
            alt="quotes"
            width={1920}
            height={1080}
        />
        <Image
            className="flex lg:hidden w-80 h-47 rounded-xl opacity-90 z-0 items-center justify-center mx-auto"
            src="/quotesm.png"
            alt="quotes"
            width={1920}
            height={1080}
        />

            <div className="absolute w-80 h-50 -mt-38 px-5 items-center text-white text-center lg:-mt-45 lg:w-[968px] lg:h-[222px] z-20 ">
                <h1 className="text-xs font-regular text-center font-semibold mb-4 lg:mb-6 lg:text-xl lg:px-10 ">
                    “And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between you compassion and mercy. Surely in this are signs for people who reflect.”
                </h1>
                <h1 className="lg:text-3xl text-xl font-title mb-6 text-center">(QS Ar-Rum : 21)</h1>
            </div>
    </div>
  )
}

export default Quotes