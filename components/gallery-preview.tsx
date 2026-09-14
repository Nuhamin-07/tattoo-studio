import galleries from "@/data/gallery";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Image from "next/image";

export default function Gallery() {
    return (
        <section>
            <div className="mt-10 grid grid-cols-1 gap-8 px-10 md:grid-cols-2 lg:grid-cols-3">
                {galleries.map((image) => (
                    <Card key={image.title} className="p-0">
                        <Tooltip >
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
    )
}