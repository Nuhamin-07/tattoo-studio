import galleries from "@/data/gallery";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Image from "next/image";

export default function Gallery() {
    return (
        <section>
            <h2 className="text-5xl font-bold text-center mt-10">Gallery</h2>
            <p className="text-center text-xl mt-2 text-gray-400 italic font-light">Turning ideas into permanent art.</p>

            <Card className="mt-10 grid grid-cols-1 gap-8 px-10 md:grid-cols-2 lg:grid-cols-3">
                {galleries.map((image) => (
                    <Tooltip key={image.title}>
                        <TooltipTrigger>
                            <div className="overflow-hidden rounded-xl shadow-lg">
                                <Image
                                    src={image.image}
                                    alt={image.alt}
                                    className="h-56 w-full object-cover"
                                    width={200}
                                    height={200}
                                />
                                <TooltipContent>
                                    {image.title}
                                    <p className="text-(--muted-foreground)">by</p>
                                    <b> {image.artist}</b>
                                </TooltipContent>
                            </div>
                        </TooltipTrigger>
                    </Tooltip>
                ))}
            </Card>

        </section >
    )
}