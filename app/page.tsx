"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import services from "@/data/services";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

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

      <section>
        <h2 className="text-5xl font-bold text-center mt-10">What We Do</h2>
        <p className="text-center text-xl mt-2 text-gray-400 italic font-light">Turning ideas into permanent art.</p>

        <div className="mt-10 grid grid-cols-1 gap-8 px-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id}>
              <img
                src={service.image}
                alt={service.alt}
                className="h-56 w-full object-cover"
              />
              <CardTitle className="px-4 pt-2">

                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>
              </CardTitle>
              <CardContent>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-5xl font-bold text-center mt-10">Gallery</h2>
        <p className="text-center text-xl mt-2 text-gray-400 italic font-light">Turning ideas into permanent art.</p>
        <div className="mt-10 grid grid-cols-1 gap-8 px-10 md:grid-cols-2 lg:grid-cols-3">
          {/* {gallery.map((image) => (
            <div key={image.alt} className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={image.image}
                alt={image.alt}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {image.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {image.description}              </p>
              </div>
            </div>
          ))} */}
        </div>
      </section>
      <section>
        <h2 className="text-5xl font-bold text-center mt-10">Meet the Artist</h2>
        <p className="text-center text-xl mt-2 text-gray-400 italic font-light">Meet the talented artists behind the ink.</p>
        <div className="mt-10 grid grid-cols-1 gap-8 px-10 md:grid-cols-2 lg:grid-cols-3">
          <div key="" className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/tattoo-artist-one.jpg"
              alt="Tattoo artist working on a client"
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                Nuhamin Gulilat
              </h3>

              <p className="mt-2 text-gray-600">
                description             </p>
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}