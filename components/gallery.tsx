import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
export interface Gallery {
  src: string
  alt: string
}
export const gallery: Gallery[] = [
  {
    src: "/gal1.jpg",
    alt: "Photo 1",
  },
  {
    src: "/gal2.jpg",
    alt: "Photo 2",
  },
  {
    src: "/gal3.jpg",
    alt: "Photo 3",
  },
  {
    src: "/gal4.png",
    alt: "Photo 4",
  },
  {
    src: "/gal5.png",
    alt: "Photo 5",
  },
  {
    src: "/gal6.png",
    alt: "Photo 6",
  },
]

export default function Gallery() {
    return (
        <div>
            {/* Desktop */}
            <div className="hidden lg:flex flex-col items-center justify-center font-regular">
                <h2 className="text-4xl font-bold mb-16 uppercase text-[#3E3E3E] z-10">
                    Gallery
                </h2>
                <div className="grid grid-cols-3 items-center justify-center gap-16 font-regular mx-28">
                    <Image
                        className="w-screen z-0"
                        src="/gal1.png"
                        alt="gallery"
                        width={1920}
                        height={1080}
                    />
                    <Image
                        className="w-screen z-0"
                        src="/gal2.png"
                        alt="gallery"
                        width={1920}
                        height={1080}
                    />
                    <Image
                        className="w-screen z-0"
                        src="/gal3.png"
                        alt="gallery"
                        width={1920}
                        height={1080}
                    />
                    <Image
                        className="w-screen z-0"
                        src="/gal4.png"
                        alt="gallery"
                        width={1920}
                        height={1080}
                    />
                    <Image
                        className="w-screen z-0"
                        src="/gal5.png"
                        alt="gallery"
                        width={1920}
                        height={1080}
                    />
                    <Image
                        className="w-screen z-0"
                        src="/gal6.png"
                        alt="gallery"
                        width={1920}
                        height={1080}
                    />
                </div>
            </div>

            {/* Mobile */}
            <div className="flex flex-col lg:hidden items-center justify-center font-regular">
                <h2 className="text-2xl font-bold mb-4 uppercase text-[#3E3E3E] z-10">
                    Gallery
                </h2>
                <ScrollArea className="w-96 rounded-md whitespace-nowrap">
                    <div className="flex w-max space-x-4 p-4">
                        {gallery.map((item) => (
                        <figure key={item.src} className="shrink-0">
                            <div className="overflow-hidden rounded-md">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                className="aspect-[1/1] h-[250px] w-[250px] object-cover"
                                width={400}
                                height={400}
                            />
                            </div>
                        </figure>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </div>
    );
}