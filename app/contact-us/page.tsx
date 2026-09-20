"use client";

import Link from "next/link";
import {
    Clock,
    Mail,
    MapPin,
    Phone,
    Send,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
    return (
        <main>
            {/* Hero */}
            <section className="bg-gray-950 px-4 py-20 text-white">
                <div className="mx-auto max-w-5xl text-center">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-400">
                        Get In Touch
                    </p>

                    <h1 className="text-4xl font-bold md:text-5xl">
                        Contact Us
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Have a question about our artists, services, or your next
                        tattoo? Get in touch with us and we&apos;ll be happy to help.
                    </p>
                </div>
            </section>

            {/* Contact Information + Form */}
            <section className="px-4 py-16">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-bold">
                            Let&apos;s Talk Ink
                        </h2>

                        <p className="mt-3 max-w-lg text-gray-600">
                            Whether you have a question about our services, want to
                            discuss a tattoo idea, or need more information about the
                            studio, feel free to reach out.
                        </p>

                        <div className="mt-8 space-y-6">
                            {/* Phone */}
                            <div className="flex gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                                    <Phone className="h-5 w-5" />
                                </div>

                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <a
                                        href="tel:+251900000000"
                                        className="text-gray-600 hover:text-black"
                                    >
                                        +251 900 000 000
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                                    <Mail className="h-5 w-5" />
                                </div>

                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <a
                                        href="mailto:hello@inkstudio.com"
                                        className="text-gray-600 hover:text-black"
                                    >
                                        hello@inkstudio.com
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                                    <MapPin className="h-5 w-5" />
                                </div>

                                <div>
                                    <h3 className="font-semibold">Studio</h3>
                                    <p className="text-gray-600">
                                        123 Example Street
                                        <br />
                                        Addis Ababa, Ethiopia
                                    </p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                                    <Clock className="h-5 w-5" />
                                </div>

                                <div>
                                    <h3 className="font-semibold">Opening Hours</h3>
                                    <p className="text-gray-600">
                                        Monday – Saturday
                                        <br />
                                        9:00 AM – 7:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="mt-10 border-t pt-8">
                            <h3 className="font-semibold">Follow Our Work</h3>

                            <div className="mt-4 flex gap-3">
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition hover:bg-black hover:text-white"
                                >
                                    <FaInstagram />
                                </a>

                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition hover:bg-black hover:text-white"
                                >
                                    <FaFacebook />
                                </a>

                                <a
                                    href="#"
                                    aria-label="TikTok"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition hover:bg-black hover:text-white"
                                >
                                    <FaTiktok />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-2xl border bg-white p-6 shadow-sm md:p-8">
                        <h2 className="text-2xl font-bold">
                            Send Us a Message
                        </h2>

                        <p className="mt-2 text-sm text-gray-600">
                            Fill out the form below and we&apos;ll get back to you
                            as soon as possible.
                        </p>

                        <form className="mt-8 space-y-6">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Full Name
                                </label>

                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Your full name"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Email
                                </label>

                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Phone Number
                                </label>

                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+251 ..."
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Subject
                                </label>

                                <select
                                    id="subject"
                                    name="subject"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled>
                                        Select a subject
                                    </option>
                                    <option value="general">
                                        General Question
                                    </option>
                                    <option value="tattoo">
                                        Tattoo Inquiry
                                    </option>
                                    <option value="pricing">
                                        Pricing
                                    </option>
                                    <option value="aftercare">
                                        Aftercare
                                    </option>
                                    <option value="artist">
                                        Artist Inquiry
                                    </option>
                                    <option value="other">
                                        Other
                                    </option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Message
                                </label>

                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="How can we help you?"
                                    className="min-h-32"
                                    required
                                />
                            </div>

                            {/* Submit */}
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full"
                            >
                                <Send className="mr-2 h-4 w-4" />
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Location */}
            <section className="bg-gray-50 px-4 py-16">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8">
                        <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                            Visit Us
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            Find Our Studio
                        </h2>
                    </div>

                    <div className="overflow-hidden rounded-2xl border bg-gray-200">
                        <div className="flex h-80 items-center justify-center">
                            <div className="text-center text-gray-500">
                                <MapPin className="mx-auto mb-3 h-10 w-10" />

                                <p className="font-medium">
                                    Studio Location
                                </p>

                                <p className="mt-1 text-sm">
                                    123 Example Street, Addis Ababa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-950 px-4 py-16 text-center text-white">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold">
                        Ready for Your Next Tattoo?
                    </h2>

                    <p className="mt-3 text-gray-400">
                        Tell us about your idea and let&apos;s bring it to life.
                    </p>

                    <Link href="/appointment">
                        <Button
                            size="lg"
                            className="bg-white text-black hover:bg-gray-200"
                        >
                            Book an Appointment
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}