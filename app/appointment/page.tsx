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
            <section className="bg-gray-950 px-4 py-16 sm:px-6 sm:py-24 text-white">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-400">
                        Start Your Tattoo Journey
                    </p>

                    <h1 className="mt-3 sm:mt-4 text-3xl sm:text-5xl md:text-6xl font-bold">
                        Book an Appointment
                    </h1>

                    <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg text-gray-400">
                        Tell us about your idea and we'll connect you with the
                        right artist.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="px-4 py-12 sm:px-6 sm:py-20">
                <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 lg:grid-cols-[1fr_1.2fr]">
                    {/* Left Side */}
                    <div>
                        <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-transparent dark:border-gray-800">
                            <Image
                                src="/images/appointment-bg.jpg"
                                alt="Tattoo Studio"
                                width={800}
                                height={1000}
                                className="h-64 sm:h-80 lg:h-[500px] w-full object-cover"
                            />
                        </div>

                        <div className="mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl bg-gray-100 dark:bg-gray-900/60 border border-transparent dark:border-gray-800 p-6 sm:p-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-950 dark:text-white">
                                What Happens Next?
                            </h3>

                            <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                                <div>
                                    <h4 className="font-semibold text-base sm:text-lg text-gray-950 dark:text-white">
                                        1. Submit Your Request
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Tell us about your tattoo idea and preferred artist.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-base sm:text-lg text-gray-950 dark:text-white">
                                        2. Consultation
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        We'll review your idea and discuss details.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-base sm:text-lg text-gray-950 dark:text-white">
                                        3. Get Tattooed
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Visit the studio and bring your vision to life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-8 sm:space-y-10">
                        {/* Artist */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-950 dark:text-white">
                                Choose Your Artist
                            </h2>

                            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                                        <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all peer-checked:border-black peer-checked:ring-2 peer-checked:ring-black dark:peer-checked:border-white dark:peer-checked:ring-white">
                                            <Image
                                                src={artist.image}
                                                alt={artist.name}
                                                width={300}
                                                height={300}
                                                className="h-36 sm:h-40 w-full object-cover"
                                            />

                                            <div className="p-3.5 sm:p-4">
                                                <h3 className="font-semibold text-base text-gray-950 dark:text-white">
                                                    {artist.name}
                                                </h3>

                                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
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
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-950 dark:text-white">
                                Service
                            </h2>

                            <div className="mt-4 sm:mt-6 grid gap-3 sm:grid-cols-2">
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

                                        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-3.5 sm:p-4 text-sm sm:text-base font-medium text-gray-900 dark:text-gray-200 transition-all hover:bg-gray-50 dark:hover:bg-gray-800/80 peer-checked:border-black peer-checked:bg-black peer-checked:text-white dark:peer-checked:border-white dark:peer-checked:bg-white dark:peer-checked:text-black">
                                            {service}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </section>

                        {/* Tattoo Details */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-950 dark:text-white">
                                Tattoo Details
                            </h2>

                            <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-5">
                                <Textarea
                                    placeholder="Describe your tattoo idea..."
                                    className="min-h-32"
                                />

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <Input placeholder="Placement (Forearm, Shoulder...)" />

                                    <Input placeholder="Approximate Size" />
                                </div>

                                <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-800 bg-transparent dark:bg-gray-900/40 p-4 sm:p-6 text-center">
                                    <Upload className="mx-auto mb-2 sm:mb-3 h-6 w-6 text-gray-400 dark:text-gray-500" />

                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                        Upload reference images
                                    </p>

                                    <input
                                        type="file"
                                        className="mt-3 sm:mt-4 text-xs sm:text-sm max-w-full text-gray-600 dark:text-gray-400"
                                        accept="image/*"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Date & Time */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-950 dark:text-white">
                                Preferred Date & Time
                            </h2>

                            <div className="mt-4 sm:mt-6 grid gap-4 sm:grid-cols-2">
                                <div className="relative">
                                    <CalendarDays className="absolute left-3 top-3.5 sm:top-3 h-4 w-4 text-gray-500 dark:text-gray-400 pointer-events-none z-10" />

                                    <Input
                                        type="date"
                                        className="pl-10"
                                    />
                                </div>

                                <div className="relative">
                                    <Clock3 className="absolute left-3 top-3.5 sm:top-3 h-4 w-4 text-gray-500 dark:text-gray-400 pointer-events-none z-10" />

                                    <Input
                                        type="time"
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Contact */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-950 dark:text-white">
                                Your Information
                            </h2>

                            <div className="mt-4 sm:mt-6 grid gap-4">
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
                            className="w-full bg-gray-950 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                        >
                            Request Appointment
                        </Button>

                        <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            Our team will review your request and contact you to
                            confirm your appointment.
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
}
