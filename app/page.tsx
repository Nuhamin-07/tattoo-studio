"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import ServiceSection from "@/components/service-section"
import Gallery from "@/components/gallery-preview"
import Artist from "@/components/artist-section"
import Footer from "@/components/footer"

export default function Home() {
  const router = useRouter();

  const handleGallery = () => {
    router.push("/gallery");
  }
  return (
    <main className="w-full">
      <section className="relative h-[80vh] w-full">
        <Image
          src="/images/tattoo-artist-one.jpg"
          alt="Tattoo artist working on a client"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-bold text-white md:text-7xl">
            Ink That Tells Your Story
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200">
            Custom tattoos designed with intention and crafted by artists
            who turn your ideas into something uniquely yours.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200">
              Book Appointment
            </button>

            <button onClick={handleGallery} className="rounded-full border border-white px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black">
              View Gallery
            </button>
          </div>
        </div>
      </section>
      <ServiceSection />
      <Gallery />
      <Artist />
      <Footer />
    </main >
  );
}