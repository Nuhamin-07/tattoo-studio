import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Footer from "@/components/footer";
import galleries from "@/data/gallery";

export default function GalleryPage() {
    return (
        <main className="min-h-screen">
            {/* Hero / Header */}
            <section className="px-4 pb-10 pt-12 text-center sm:px-6 sm:pb-12 sm:pt-20">
                <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gray-500 dark:text-zinc-400">
                    Our Work
                </p>

                <h1 className="mt-2 sm:mt-3 text-3xl sm:text-4xl md:text-5xl font-bold dark:text-zinc-100">
                    Tattoo Gallery
                </h1>

                <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-gray-500 dark:text-zinc-400 md:text-lg">
                    Explore tattoos created by our artists across a variety of styles,
                    from delicate fine line work to bold custom designs.
                </p>
            </section>

            {/* Gallery */}
            <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {galleries.map((image) => (
                            <Link
                                key={image.id}
                                href={`/gallery/${image.id}`}
                                className="group relative block overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 border border-transparent dark:border-zinc-800"
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        src={image.image}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                                    {/* Content */}
                                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white">
                                        <p className="text-base sm:text-lg font-semibold">
                                            {image.title}
                                        </p>

                                        <p className="mt-1 text-xs sm:text-sm text-gray-300">
                                            Tattooed by{" "}
                                            <span className="font-medium text-white">
                                                {image.artist}
                                            </span>
                                        </p>

                                        <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm font-medium opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                            View Tattoo
                                            <ArrowRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
} 