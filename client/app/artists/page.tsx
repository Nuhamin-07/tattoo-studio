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
            <section className="bg-gray-950 px-4 py-16 sm:px-6 sm:py-24 text-white">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                        Meet The Team
                    </p>

                    <h1 className="mt-3 sm:mt-4 text-3xl sm:text-5xl md:text-6xl font-bold">
                        Artists Behind The Ink
                    </h1>

                    <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg text-gray-400">
                        Every tattoo begins with an idea and an artist who knows how to
                        bring it to life. Meet the talented people behind our work.
                    </p>
                </div>
            </section>

            {/* Artists Grid */}
            <section className="px-4 py-12 sm:px-6 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                        {artists.map((artist) => (
                            <article
                                key={artist.id}
                                className="overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 shadow-sm transition hover:shadow-lg"
                            >
                                <div className="grid md:grid-cols-2">
                                    {/* Image */}
                                    <div className="relative h-64 sm:h-80 md:h-full min-h-[250px]">
                                        <Image
                                            src={artist.image}
                                            alt={artist.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 25vw"
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col justify-between p-6 sm:p-8">
                                        <div>
                                            <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium">
                                                {artist.role}
                                            </p>

                                            <h2 className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-gray-950 dark:text-white">
                                                {artist.name}
                                            </h2>

                                            <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                                                {artist.specialty}
                                            </p>

                                            <p className="mt-3 sm:mt-5 text-sm leading-6 sm:leading-7 text-gray-600 dark:text-gray-400">
                                                {artist.bio}
                                            </p>

                                            <div className="mt-4 sm:mt-6 flex items-center gap-4">
                                                <a
                                                    href="#"
                                                    aria-label={`${artist.name} Instagram`}
                                                    className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition"
                                                >
                                                    <FaInstagram size={20} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="mt-6 sm:mt-8">
                                            <Link href="/appointment">
                                                <Button className="w-full sm:w-auto bg-gray-950 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                                                    Book With {artist.name}
                                                    <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
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
            <section className="bg-gray-100 dark:bg-gray-900/50 px-4 py-12 sm:px-6 sm:py-20 border-t border-transparent dark:border-gray-800">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                        Ready To Start?
                    </p>

                    <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl font-bold text-gray-950 dark:text-white">
                        Let’s Create Something Unique
                    </h2>

                    <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        Whether you already have a design in mind or need help developing
                        your idea, our artists are ready to work with you.
                    </p>

                    <div className="mt-6 sm:mt-8">
                        <Link href="/appointment">
                            <Button size="lg" className="w-full sm:w-auto bg-gray-950 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
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
