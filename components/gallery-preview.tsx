import galleries from "@/data/gallery";
import { Card } from "./ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Image from "next/image";

export default function Gallery() {
    return (
        <section>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {galleries.map((image) => (
                    <Card key={image.title} className="p-0 overflow-hidden">
                        <Tooltip>
                            <TooltipTrigger className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/5] w-full overflow-hidden cursor-pointer group">
                                <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/5] w-full overflow-hidden cursor-pointer group">
                                    <Image
                                        src={image.image}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                                        <p className="font-semibold text-sm sm:text-base">{image.title}</p>
                                        <p className="text-xs text-gray-300">by {image.artist}</p>
                                    </div>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-semibold">{image.title}</p>
                                <p className="text-xs text-muted-foreground">by {image.artist}</p>
                            </TooltipContent>
                        </Tooltip>
                    </Card>
                ))}
            </div>
        </section>
    );
}