import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import artists from "@/data/artists";

import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";


export default function ArtistsPage() {
    return (
        <main>
            {/* Hero */}
            <section className="bg-gray-950 px-6 py-24 text-white">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                        Meet The Team
                    </p>

                    <h1 className="mt-4 text-5xl font-bold md:text-6xl">
                        Artists Behind The Ink
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
                        Every tattoo begins with an idea and an artist who knows how to
                        bring it to life. Meet the talented people behind our work.
                    </p>
                </div>
            </section>

            {/* Artists Grid */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 md:grid-cols-2">
                        {artists.map((artist) => (
                            <article
                                key={artist.id}
                                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
                            >
                                <div className="grid md:grid-cols-2">
                                    {/* Image */}
                                    <div className="relative h-80 md:h-full">
                                        <Image
                                            src={artist.image}
                                            alt={artist.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col justify-center p-8">
                                        <p className="text-sm uppercase tracking-wider text-gray-500">
                                            {artist.role}
                                        </p>

                                        <h2 className="mt-2 text-3xl font-bold">
                                            {artist.name}
                                        </h2>

                                        <p className="mt-3 text-sm font-medium text-gray-700">
                                            {artist.specialty}
                                        </p>

                                        <p className="mt-5 leading-7 text-gray-600">
                                            {artist.bio}
                                        </p>

                                        <div className="mt-6 flex items-center gap-4">
                                            <a
                                                href="#"
                                                aria-label={`${artist.name} Instagram`}
                                                className="text-gray-500 transition hover:text-black"
                                            >
                                                <FaInstagram size={20} />
                                            </a>
                                        </div>

                                        <div className="mt-8">
                                            <Link href="/appointment">
                                                <Button>
                                                    Book With {artist.name}
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-100 px-6 py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                        Ready To Start?
                    </p>

                    <h2 className="mt-4 text-4xl font-bold">
                        Let’s Create Something Unique
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-gray-600">
                        Whether you already have a design in mind or need help developing
                        your idea, our artists are ready to work with you.
                    </p>

                    <div className="mt-8">
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
