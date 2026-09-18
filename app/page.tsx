import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import ServiceSection from "@/components/service-section";
import Gallery from "@/components/gallery-preview";
import Artist from "@/components/artist-section";
import Footer from "@/components/footer";

const reasons = [
  {
    title: "Experienced Artists",
    description:
      "Our artists bring different styles and creative perspectives to every tattoo.",
    icon: Sparkles,
  },
  {
    title: "Custom Designs",
    description:
      "Every tattoo is created around your idea, style, placement, and personal story.",
    icon: Palette,
  },
  {
    title: "Professional Studio",
    description:
      "We provide a clean, comfortable, and professional environment for every client.",
    icon: ShieldCheck,
  },
  {
    title: "Your Story Matters",
    description:
      "We take the time to understand your vision and create artwork that feels uniquely yours.",
    icon: Heart,
  },
];

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative min-h-[80vh] w-full overflow-hidden">
        <Image
          src="/images/tattoo-artist-one.jpg"
          alt="Tattoo artist working on a client"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[80vh] items-center justify-center px-6 py-20 text-center">
          <div className="max-w-4xl text-white">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-gray-300">
              Custom Tattoo Studio
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Ink That Tells
              <br />
              Your Story
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
              Custom tattoos designed with intention and crafted
              by artists who turn your ideas into something
              uniquely yours.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/appointment">
                <Button
                  size="lg"
                  className="w-full bg-white px-7 text-black hover:bg-gray-200 sm:w-auto"
                >
                  Book an Appointment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white bg-transparent px-7 text-white hover:bg-white hover:text-black sm:w-auto"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <ServiceSection />

      {/* Gallery Preview */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Our Work
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Recent Tattoos
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              A selection of tattoos created by our artists,
              from delicate fine line pieces to bold custom
              designs.
            </p>
          </div>

          <div className="mt-10">
            <Gallery />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 font-semibold transition hover:gap-3"
            >
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Artists */}
      <Artist />

      {/* Why Choose Us */}
      <section className="bg-gray-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              More Than Just a Tattoo
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              From the first conversation to the finished piece,
              we focus on making your tattoo experience personal,
              comfortable, and memorable.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-black">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gray-100 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Your Idea. Your Story. Your Ink.
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Ready to Create Something Permanent?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
            Tell us about your idea and let&apos;s work together
            to turn it into a tattoo you&apos;ll be proud to wear.
          </p>

          <div className="mt-7">
            <Link href="/appointment">
              <Button
                size="lg"
                className="bg-gray-950 text-white hover:bg-gray-800"
              >
                Book an Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
