"use client"

import { useParams } from "next/navigation"
import galleries from "@/data/gallery"

export default function GalleryDetail() {
    const params = useParams()
    const { id } = params
    console.log(id)
    //const gallery = galleries.find((gallery) => gallery.id === id)

    return (
        <div>
            <h1>Gallery Detail</h1>
        </div>
    )
}