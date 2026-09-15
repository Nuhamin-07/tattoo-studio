"use client"

import { useParams } from "next/navigation"
import galleries from "@/data/gallery"
import Image from "next/image"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function GalleryDetail() {
    const params = useParams()
    const { id } = params

    const gallery = galleries.find((gallery) => gallery.id === Number(id))

    return (
        <div>
            <Breadcrumb className="px-10 my-4 text-lg">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/gallery">Gallery</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbPage>{gallery?.title}</BreadcrumbPage>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="flex flex-col items-center px-10 justify-center gap-8">
                <Image
                    src={gallery?.image || ""}
                    alt={gallery?.alt || ""}
                    width={300}
                    height={500}
                    className="rounded-xl shadow-lg"
                />
                <h3 className="text-5xl font-bold text-center">{gallery?.title}</h3>
                <p className="text-center text-xl mt-2 text-gray-400 font-light">{gallery?.description}</p>
                <p>Tatooed by {gallery?.artist}</p>
                <p>{gallery?.style} . {gallery?.placement}</p>
            </div>
        </div>
    )
}