"use client"

import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

function Story() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const StoryContent = [
    {
      title: "20 November 2024",
      description: "It all began with a simple meeting. Nothing felt extraordinary at that time, yet who would have thought that day would mark the beginning of our long journey together. A conversation that once felt ordinary slowly turned into a bridge that brought our hearts closer. Day by day, a sense of comfort grew naturally. We started to believe that perhaps this was God’s way of uniting two hearts He had destined to be together.",
    },
    {
      title: "22 February 2025",
      description: "That day became an unforgettable moment. With a gaze full of sincerity, he expressed his true intention: to take our steps toward something more serious—marriage. A whirlwind of emotions filled the day—gratefulness, joy, and certainty. It was on that day I became even more convinced that this love was not just a feeling, but a decision to care for and accompany each other for a lifetime.",
    },
    {
      title: "02 April 2025",
      description: "The next big step came with prayers and the blessing of our families. We sealed our engagement in a warm atmosphere filled with happiness. That moment was not only about the ring encircling a finger, but also a symbol of commitment, courage, and determination to build a home together. The engagement stood as proof that our story was no longer a dream, but a beautiful reality taking shape.",
    },
    {
      title: "18 October 2025",
      description: "Now, this journey has brought us to the day we have always awaited. A day when two hearts and two families are united in the sacred bond of marriage. We believe that every step we have taken is part of the best plan that Allah has written for us. With gratitude, we are ready to open a new chapter as husband and wife, to build a family, inshaAllah, filled with love, blessings, and happiness.",
      description2: "With all humility, we kindly ask for your prayers and blessings so that our journey may always be showered with grace. Your presence will be the most beautiful gift in our story.",
    },
  ]

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="max-w-xs">
      <h1 className="text-2xl lg:text-4xl text-[#9D8443] font-semibold">OUR STORY</h1>
      <Carousel setApi={setApi} className="lg:w-[600px] w-max-screen">
        <CarouselContent className="lg:w-[600px]">
          {Array.from({ length: StoryContent.length }).map((_, index) => (
            <CarouselItem key={index}>
                <div className="flex flex-col gap-2 justify-center font-regular mt-5 ">
                    <span className="lg:text-2xl font-bold text-xl">{StoryContent[index].title}</span>
                    <span className="text-[#3E3E3E] lg:text-lg text-sm text-justify">{StoryContent[index].description}<br/><br/>{StoryContent[index].description2}</span>
                </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="text-muted-foreground py-2 text-center text-sm mt-2">
        Story {current} of {count}
            <div className="-mt-[10px]">
                <CarouselPrevious/>
                <CarouselNext />
            </div>
        </div>
        
      </Carousel>
      
    </div>
  )
}

export default Story
