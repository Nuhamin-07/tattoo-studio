import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    Check,
    Heart,
    Palette,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import artists from "@/data/artists";

import { Button } from "@/components/ui/button";

const values = [
    {
        title: "Craftsmanship",
        description:
            "We focus on precision, detail, and quality in every tattoo we create.",
        icon: Palette,
    },
    {
        title: "Creativity",
        description:
            "Every tattoo is an opportunity to create something personal and unique.",
        icon: Sparkles,
    },
    {
        title: "Your Story",
        description:
            "We work with you to create artwork that reflects your personality and story.",
        icon: Heart,
    },
];

const expectations = [
    {
        title: "Personal Consultation",
        description:
            "We take the time to understand your idea, style, and vision before we begin.",
        icon: Heart,
    },
    {
        title: "Custom Artwork",
        description:
            "Your tattoo is designed around your preferred style, placement, and individual vision.",
        icon: Palette,
    },
    {
        title: "Professional Environment",
        description:
            "We maintain a clean, comfortable, and professional studio environment for every client.",
        icon: ShieldCheck,
    },
    {
        title: "Aftercare Guidance",
        description:
            "We provide clear aftercare instructions to help your tattoo heal properly.",
        icon: Check,
    },
];

export default function AboutPage() {
    return (
        <main>
            {/* Hero */}
            <section className="relative min-h-[500px] overflow-hidden bg-gray-950">
                <Image
                    src="/images/about-hero.jfif"
                    alt="Tattoo artist working in the studio"
                    fill
                    priority
                    className="object-cover opacity-80"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex min-h-[500px] items-center px-4 py-20 sm:px-6 lg:px-8">
                    <div className="mx-auto w-full max-w-5xl text-center text-white">
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gray-300">
                            Our Studio
                        </p>

                        <h1 className="text-4xl font-bold md:text-6xl">
                            Art That Tells
                            <br />
                            Your Story
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
                            We create meaningful, custom tattoos in a
                            professional and welcoming studio where creativity
                            and individuality come first.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                        <Image
                            src="/images/studio.jpg"
                            alt="Inside our tattoo studio"
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                            Our Story
                        </p>

                        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                            More Than Just Ink
                        </h2>

                        <div className="mt-6 space-y-4 leading-7 text-gray-600">
                            <p>
                                We believe every tattoo has a story behind it.
                                Our studio was created as a space where
                                creativity, craftsmanship, and personal
                                expression come together.
                            </p>

                            <p>
                                From the first consultation to the finished
                                tattoo, we work closely with every client to
                                understand their vision and create artwork that
                                feels personal, meaningful, and uniquely theirs.
                            </p>

                            <p>
                                Whether you are getting your first tattoo or
                                adding to an existing collection, our goal is
                                to make the experience comfortable,
                                collaborative, and memorable.
                            </p>
                        </div>

                        <Link
                            href="/appointment"
                            className="mt-8 inline-flex items-center gap-2 font-semibold transition hover:gap-3"
                        >
                            Start Your Tattoo Journey
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="bg-gray-950 px-4 py-20 text-white sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                            What We Believe
                        </p>

                        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                            Our Philosophy
                        </h2>

                        <p className="mt-4 leading-7 text-gray-400">
                            Great tattoos are more than beautiful designs.
                            They are personal pieces of art created with
                            intention, care, and craftsmanship.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {values.map((value) => {
                            const Icon = value.icon;

                            return (
                                <div
                                    key={value.title}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold">
                                        {value.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-gray-400">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Artists */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                                The Team
                            </p>

                            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                                Meet Our Artists
                            </h2>

                            <p className="mt-3 max-w-xl text-gray-600">
                                Our artists bring different styles,
                                perspectives, and creative approaches to every
                                piece.
                            </p>
                        </div>

                        <Link
                            href="/artists"
                            className="inline-flex items-center gap-2 font-semibold hover:gap-3"
                        >
                            Meet the Team
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                        {artists.map((artist) => (
                            <Link
                                key={artist.name}
                                href={`/ artists / ${artist.name.toLowerCase()} `}
                                className="group"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100">
                                    <Image
                                        src={artist.image}
                                        alt={artist.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 pt-16 text-white">
                                        <h3 className="font-semibold">
                                            {artist.name}
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-300">
                                            {artist.role}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Studio */}
            <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                                The Experience
                            </p>

                            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                                A Studio Built Around You
                            </h2>

                            <p className="mt-5 leading-7 text-gray-600">
                                Getting a tattoo should be an experience you
                                feel comfortable with from beginning to end.
                                Our studio is designed to provide a relaxed,
                                welcoming environment where you can work
                                directly with your artist.
                            </p>

                            <p className="mt-4 leading-7 text-gray-600">
                                We believe good communication is just as
                                important as good artwork. That is why we take
                                the time to understand your ideas, answer your
                                questions, and make sure you feel confident
                                before the tattooing process begins.
                            </p>
                        </div>

                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                            <Image
                                src="/images/studio-2.jpg"
                                alt="Tattoo studio interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What to Expect */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                            From Start to Finish
                        </p>

                        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                            What You Can Expect
                        </h2>

                        <p className="mt-4 text-gray-600">
                            We want every part of your tattoo experience to
                            feel professional, comfortable, and personal.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {expectations.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border bg-white p-6 shadow-sm"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-950 text-white">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <span className="text-sm font-semibold text-gray-300">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h3 className="mt-6 font-semibold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-950 px-4 py-20 text-center text-white sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                        Your Story Starts Here
                    </p>

                    <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                        Ready for Your Next Tattoo?
                    </h2>

                    <p className="mt-4 leading-7 text-gray-400">
                        Tell us about your idea and let&apos;s create
                        something that is uniquely yours.
                    </p>

                    <Link href="/appointment">
                        <Button
                            size="lg"
                            className="mt-7 bg-white text-black hover:bg-gray-200"
                        >
                            Book an Appointment
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
