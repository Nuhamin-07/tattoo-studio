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
            <section className="px-6 pt-8">
                <div className="mx-auto max-w-7xl">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-black"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Gallery
                    </Link>
                </div>
            </section>

            {/* Main Tattoo */}
            <section className="px-6 py-10 sm:py-14 lg:py-16">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
                    {/* Image */}
                    <div className="overflow-hidden rounded-2xl bg-gray-100">
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
                        <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                            Tattoo Detail
                        </p>

                        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                            {tattoo.title}
                        </h1>

                        <p className="mt-5 text-lg leading-8 text-gray-600">
                            {tattoo.description}
                        </p>

                        {/* Details */}
                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="rounded-xl border p-4">
                                <div className="flex items-center gap-3">
                                    <User className="h-5 w-5 text-gray-500" />
                                    <div>
                                        <p className="text-sm text-gray-500">Artist</p>
                                        <p className="font-semibold">{tattoo.artist}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border p-4">
                                <div className="flex items-center gap-3">
                                    <Ruler className="h-5 w-5 text-gray-500" />
                                    <div>
                                        <p className="text-sm text-gray-500">Style</p>
                                        <p className="font-semibold">{tattoo.style}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border p-4">
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-gray-500" />
                                    <div>
                                        <p className="text-sm text-gray-500">Placement</p>
                                        <p className="font-semibold">{tattoo.placement}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border p-4">
                                <div className="flex items-center gap-3">
                                    <Calendar className="h-5 w-5 text-gray-500" />
                                    <div>
                                        <p className="text-sm text-gray-500">Availability</p>
                                        <p className="font-semibold">By Appointment</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link href="/appointment">
                                <Button size="lg" className="w-full sm:w-auto">
                                    Book an Appointment
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>

                            <Link href={`/artists/${tattoo.artist.toLowerCase()}`}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto"
                                >
                                    View Artist
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About the Tattoo */}
            <section className="bg-gray-950 px-6 py-16 text-white sm:py-20">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-400">
                        About The Design
                    </p>

                    <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                        Made With Intention
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
                        Every tattoo we create is designed with attention to detail,
                        placement, style, and the individual story behind the artwork.
                    </p>
                </div>
            </section>

            {/* Related Tattoos */}
            {relatedTattoos.length > 0 && (
                <section className="px-6 py-16 sm:py-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex items-end justify-between gap-4">
                            <div>
                                <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                                    More From {tattoo.artist}
                                </p>

                                <h2 className="mt-2 text-3xl font-bold">
                                    Related Work
                                </h2>
                            </div>

                            <Link
                                href="/gallery"
                                className="hidden items-center gap-2 text-sm font-semibold sm:flex"
                            >
                                View All
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {relatedTattoos.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/gallery/${item.id}`}
                                    className="group overflow-hidden rounded-2xl"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="mt-3">
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <p className="mt-1 text-sm text-gray-500">
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
            <section className="bg-gray-100 px-6 py-16 sm:py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                        Create Your Own
                    </p>

                    <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                        Ready for Your Next Tattoo?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-gray-600">
                        Have an idea in mind? Talk with one of our artists and turn your
                        idea into a custom piece of art.
                    </p>

                    <div className="mt-7">
                        <Link href="/appointment">
                            <Button size="lg">
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