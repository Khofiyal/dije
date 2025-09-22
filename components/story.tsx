"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
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
      description: "Semua berawal dari sebuah pertemuan sederhana. Tidak ada yang istimewa kala itu, namun siapa sangka hari itu akan menjadi titik awal dari perjalanan panjang kami. Percakapan yang awalnya terasa biasa, berubah menjadi jembatan yang perlahan mendekatkan hati. Dari hari ke hari, rasa nyaman tumbuh begitu alami. Kami mulai percaya, mungkin inilah cara Tuhan mempertemukan dua hati yang sudah Dia siapkan untuk bersama.",
    },
    {
      title: "22 Februari 2025",
      description: "Hari itu menjadi momen yang tak akan pernah terlupakan. Dengan tatapan penuh kesungguhan, ia mengungkapkan niat tulusnya: mengajak melangkah ke jenjang yang lebih serius, pernikahan. Rasanya campur aduk—haru, bahagia, dan penuh keyakinan. Di hari itulah aku semakin yakin bahwa cinta ini bukan sekadar rasa, tetapi sebuah keputusan untuk saling menjaga dan menemani sepanjang usia.",
    },
    {
      title: "02 April 2025",
      description: "Langkah besar berikutnya datang dengan doa dan restu keluarga. Kami mengikat janji pertunangan dalam suasana hangat penuh kebahagiaan. Momen itu bukan hanya tentang cincin yang melingkar di jari, melainkan simbol komitmen, keberanian, dan keyakinan untuk membangun rumah tangga bersama. Pertunangan menjadi saksi bahwa cerita kami bukan lagi mimpi, melainkan kenyataan yang sedang tumbuh indah.",
    },
    {
      title: "18 Oktober 2025",
      description: "Kini, perjalanan itu membawa kami pada hari yang selalu kami nantikan. Hari di mana dua hati dan dua keluarga dipersatukan dalam ikatan suci pernikahan. Kami percaya, semua langkah yang kami tempuh adalah bagian dari rencana terbaik yang Allah tuliskan untuk kami. Dengan penuh syukur, kami siap membuka lembaran baru sebagai suami dan istri, membangun rumah tangga yang insyaAllah dipenuhi cinta, keberkahan, dan kebahagiaan.",
      description2: "Dengan segala kerendahan hati, kami memohon doa restu agar perjalanan kami senantiasa diberkahi. Kehadiran Bapak/Ibu/Saudara/i akan menjadi hadiah terindah dalam kisah kami.",
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
      <Carousel setApi={setApi} className="lg:w-[600px] w-100">
        <CarouselContent className="lg:w-[600px]">
          {Array.from({ length: StoryContent.length }).map((_, index) => (
            <CarouselItem key={index}>
                <div className="flex flex-col gap-2 justify-center font-regular mt-5 ">
                    <span className="lg:text-2xl font-bold text-xl">{StoryContent[index].title}</span>
                    <span className="text-[#3E3E3E] lg:text-lg text-sm">{StoryContent[index].description}<br/><br/>{StoryContent[index].description2}</span>
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
