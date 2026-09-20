import Image from "next/image";
import { CalendarDays, Clock3, Upload } from "lucide-react";
import artists from "@/data/artists";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const services = [
    "Tattoo Consultation",
    "Custom Tattoo",
    "Cover Up Tattoo",
    "Touch Up Tattoo",
];

export default function AppointmentPage() {
    return (
        <main>
            {/* Hero */}
            <section className="bg-gray-950 px-6 py-24 text-white">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                        Start Your Tattoo Journey
                    </p>

                    <h1 className="mt-4 text-5xl font-bold md:text-6xl">
                        Book an Appointment
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
                        Tell us about your idea and we'll connect you with the
                        right artist.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="px-6 py-20">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]">
                    {/* Left Side */}
                    <div>
                        <div className="overflow-hidden rounded-3xl">
                            <Image
                                src="/images/appointment-bg.jpg"
                                alt="Tattoo Studio"
                                width={800}
                                height={1000}
                                className="h-[500px] w-full object-cover"
                            />
                        </div>

                        <div className="mt-8 rounded-3xl bg-gray-100 p-8">
                            <h3 className="text-2xl font-bold">
                                What Happens Next?
                            </h3>

                            <div className="mt-6 space-y-6">
                                <div>
                                    <h4 className="font-semibold">
                                        1. Submit Your Request
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Tell us about your tattoo idea and preferred artist.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        2. Consultation
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        We'll review your idea and discuss details.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        3. Get Tattooed
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Visit the studio and bring your vision to life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-10">
                        {/* Artist */}
                        <section>
                            <h2 className="text-2xl font-bold">
                                Choose Your Artist
                            </h2>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                {artists.map((artist) => (
                                    <label
                                        key={artist.name}
                                        className="cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="artist"
                                            className="peer sr-only"
                                        />

                                        <div className="overflow-hidden rounded-2xl border transition-all peer-checked:border-black peer-checked:ring-2 peer-checked:ring-black">
                                            <Image
                                                src={artist.image}
                                                alt={artist.name}
                                                width={300}
                                                height={300}
                                                className="h-40 w-full object-cover"
                                            />

                                            <div className="p-4">
                                                <h3 className="font-semibold">
                                                    {artist.name}
                                                </h3>

                                                <p className="text-sm text-gray-500">
                                                    {artist.specialty}
                                                </p>
                                            </div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </section>

                        {/* Service */}
                        <section>
                            <h2 className="text-2xl font-bold">
                                Service
                            </h2>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                {services.map((service) => (
                                    <label
                                        key={service}
                                        className="cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="service"
                                            className="peer sr-only"
                                        />

                                        <div className="rounded-xl border p-4 transition-all hover:bg-gray-50 peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                                            {service}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </section>

                        {/* Tattoo Details */}
                        <section>
                            <h2 className="text-2xl font-bold">
                                Tattoo Details
                            </h2>

                            <div className="mt-6 space-y-5">
                                <Textarea
                                    placeholder="Describe your tattoo idea..."
                                    className="min-h-32"
                                />

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <Input placeholder="Placement (Forearm, Shoulder...)" />

                                    <Input placeholder="Approximate Size" />
                                </div>

                                <div className="rounded-xl border border-dashed p-6 text-center">
                                    <Upload className="mx-auto mb-3 h-6 w-6 text-gray-400" />

                                    <p className="text-sm text-gray-500">
                                        Upload reference images
                                    </p>

                                    <input
                                        type="file"
                                        className="mt-4"
                                        accept="image/*"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Date & Time */}
                        <section>
                            <h2 className="text-2xl font-bold">
                                Preferred Date & Time
                            </h2>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <div className="relative">
                                    <CalendarDays className="absolute left-3 top-3 h-4 w-4 text-gray-500" />

                                    <Input
                                        type="date"
                                        className="pl-10"
                                    />
                                </div>

                                <div className="relative">
                                    <Clock3 className="absolute left-3 top-3 h-4 w-4 text-gray-500" />

                                    <Input
                                        type="time"
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Contact */}
                        <section>
                            <h2 className="text-2xl font-bold">
                                Your Information
                            </h2>

                            <div className="mt-6 grid gap-4">
                                <Input placeholder="Full Name" />

                                <Input
                                    type="email"
                                    placeholder="Email Address"
                                />

                                <Input
                                    type="tel"
                                    placeholder="Phone Number"
                                />
                            </div>
                        </section>

                        <Button
                            size="lg"
                            className="w-full"
                        >
                            Request Appointment
                        </Button>

                        <p className="text-center text-sm text-gray-500">
                            Our team will review your request and contact you to
                            confirm your appointment.
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
}
