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
import { Button } from "@/components/ui/button"

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
            <div className="flex flex items-center justify-center gap-8 min-h-[600px]">
                <Image
                    src={gallery?.image || ""}
                    alt={gallery?.alt || ""}
                    width={400}
                    height={400}
                    className="rounded-xl shadow-lg"
                />
                <div className="flex flex-col gap-8">
                    <h3 className="text-5xl font-bold text-center">{gallery?.title}</h3>
                    <p className="text-left text-xl mt-2 text-gray-400 font-light max-w-[700px]">{gallery?.description}</p>
                    <div className="flex items-center justify-center gap-8">
                        <p className="text-gray-400">Tattoo by <span className="text-black-400 font-bold">{gallery?.artist}</span></p>
                        <p className="text-gray-400">{gallery?.style} - <span className="text-black-400 font-bold">{gallery?.placement}</span></p>
                    </div>
                    <Button className="w-md mx-auto bg-gray-900 hover:bg-gray-600 text-white cursor-pointer">
                        Book an Appointment
                    </Button>
                </div>
            </div>
        </div>
    )
}