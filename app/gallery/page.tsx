"use client"

import Footer from "@/components/footer"
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import galleries from "@/data/gallery";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function GalleryPage() {
    const router = useRouter();

    function galleryDetail(id: number) {
        router.push(`/gallery/${id}`);
    }

    return (
        <main>
            <h2 className="text-5xl font-bold text-center mt-10">Our Work</h2>
            <p className="text-center text-xl mt-2 text-gray-400 font-light">Explore tattoos created by our artists across a variety of styles.</p>
            <section>
                <div className="mt-10 grid grid-cols-1 gap-8 px-10 md:grid-cols-2 lg:grid-cols-3">
                    {galleries.map((image) => (
                        <Card key={image.title} className="p-0 cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => galleryDetail(image.id)}>
                            <Tooltip>
                                <TooltipTrigger>
                                    {/* <div className="overflow-hidden rounded-xl shadow-lg"> */}
                                    <Image
                                        src={image.image}
                                        alt={image.alt}
                                        className="h-75 w-full object-cover"
                                        width={100}
                                        height={150}
                                    />
                                    <TooltipContent>
                                        {image.title}
                                        <p className="text-(--muted-foreground)">by</p>
                                        <b> {image.artist}</b>
                                    </TooltipContent>
                                    {/* </div> */}
                                </TooltipTrigger>
                            </Tooltip>
                        </Card>
                    ))}
                </div>
            </section >
            <Footer />
        </main>
    )
}