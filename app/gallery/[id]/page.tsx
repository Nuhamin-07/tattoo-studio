import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, MapPin, Ruler, User } from "lucide-react";
import { notFound } from "next/navigation";

import Footer from "@/components/footer";
import galleries from "@/data/gallery";
import { Button } from "@/components/ui/button";

interface GalleryDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function GalleryDetailPage({
    params,
}: GalleryDetailPageProps) {
    const { id } = await params;

    const tattoo = galleries.find((item) => item.id === Number(id));

    if (!tattoo) {
        notFound();
    }

    const relatedTattoos = galleries
        .filter((item) => item.id !== tattoo.id && item.artist === tattoo.artist)
        .slice(0, 3);

    return (
        <main className="min-h-screen">
            {/* Back to Gallery */}
            <section className="px-4 pt-6 sm:px-6 sm:pt-8">
                <div className="mx-auto max-w-7xl">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-zinc-400 transition hover:text-black dark:hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Gallery
                    </Link>
                </div>
            </section>

            {/* Main Tattoo */}
            <section className="px-4 py-8 sm:px-6 sm:py-14 lg:py-16">
                <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
                    {/* Image */}
                    <div className="overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 border border-transparent dark:border-zinc-800">
                        <div className="relative aspect-[4/5] w-full">
                            <Image
                                src={tattoo.image}
                                alt={tattoo.alt}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Information */}
                    <div>
                        <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gray-500 dark:text-zinc-400">
                            Tattoo Detail
                        </p>

                        <h1 className="mt-2 sm:mt-4 text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight dark:text-zinc-100">
                            {tattoo.title}
                        </h1>

                        <p className="mt-3 sm:mt-5 text-sm sm:text-lg leading-6 sm:leading-8 text-gray-600 dark:text-zinc-300">
                            {tattoo.description}
                        </p>

                        {/* Details */}
                        <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
                            <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-3.5 sm:p-4">
                                <div className="flex items-center gap-3">
                                    <User className="h-5 w-5 text-gray-500 dark:text-zinc-400 shrink-0" />
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-zinc-400">Artist</p>
                                        <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-zinc-100">{tattoo.artist}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-3.5 sm:p-4">
                                <div className="flex items-center gap-3">
                                    <Ruler className="h-5 w-5 text-gray-500 dark:text-zinc-400 shrink-0" />
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-zinc-400">Style</p>
                                        <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-zinc-100">{tattoo.style}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-3.5 sm:p-4">
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-gray-500 dark:text-zinc-400 shrink-0" />
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-zinc-400">Placement</p>
                                        <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-zinc-100">{tattoo.placement}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-3.5 sm:p-4">
                                <div className="flex items-center gap-3">
                                    <Calendar className="h-5 w-5 text-gray-500 dark:text-zinc-400 shrink-0" />
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-zinc-400">Availability</p>
                                        <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-zinc-100">By Appointment</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link href="/appointment" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto">
                                    Book an Appointment
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>

                            <Link href="/artists" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto border-gray-300 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                                >
                                    View Artist
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About the Tattoo */}
            <section className="bg-gray-950 dark:bg-zinc-950 px-4 py-12 text-white sm:px-6 sm:py-20">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gray-400">
                        About The Design
                    </p>

                    <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold md:text-4xl">
                        Made With Intention
                    </h2>

                    <p className="mx-auto mt-3 sm:mt-5 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-gray-400 md:text-lg">
                        Every tattoo we create is designed with attention to detail,
                        placement, style, and the individual story behind the artwork.
                    </p>
                </div>
            </section>

            {/* Related Tattoos */}
            {relatedTattoos.length > 0 && (
                <section className="px-4 py-12 sm:px-6 sm:py-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex items-end justify-between gap-4">
                            <div>
                                <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-zinc-400">
                                    More From {tattoo.artist}
                                </p>

                                <h2 className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold dark:text-zinc-100">
                                    Related Work
                                </h2>
                            </div>

                            <Link
                                href="/gallery"
                                className="hidden items-center gap-2 text-sm font-semibold sm:flex dark:text-zinc-200 dark:hover:text-white"
                            >
                                View All
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {relatedTattoos.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/gallery/${item.id}`}
                                    className="group overflow-hidden rounded-2xl"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 border border-transparent dark:border-zinc-800">
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="mt-3">
                                        <h3 className="font-semibold text-base dark:text-zinc-100">{item.title}</h3>
                                        <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-zinc-400">
                                            {item.artist}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA */}
            <section className="bg-gray-100 dark:bg-zinc-900/60 px-4 py-12 sm:px-6 sm:py-20 border-t border-b border-transparent dark:border-zinc-800">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-zinc-400">
                        Create Your Own
                    </p>

                    <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold md:text-4xl dark:text-zinc-100">
                        Ready for Your Next Tattoo?
                    </h2>

                    <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-gray-600 dark:text-zinc-400">
                        Have an idea in mind? Talk with one of our artists and turn your
                        idea into a custom piece of art.
                    </p>

                    <div className="mt-6 sm:mt-7">
                        <Link href="/appointment">
                            <Button size="lg" className="w-full sm:w-auto">
                                Book an Appointment
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}