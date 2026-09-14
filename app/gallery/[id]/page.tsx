"use client"

import { useParams } from "next/navigation"
import galleries from "@/data/gallery"
import Image from "next/image"

export default function GalleryDetail() {
    const params = useParams()
    const { id } = params

    const gallery = galleries.find((gallery) => gallery.id === Number(id))

    return (
        <div>
            <h1 className="text-5xl font-bold text-center mt-10">{gallery?.title}</h1>
            <div className="flex items-center px-10 justify-center gap-8">
                <Image
                    src={gallery?.image || ""}
                    alt={gallery?.alt || ""}
                    width={500}
                    height={500}
                />
                <p className="text-center text-xl mt-2 text-gray-400 font-light">{gallery?.description}</p>
            </div>
        </div>
    )
}