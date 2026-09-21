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
            <section className="bg-gray-950 px-4 py-16 sm:py-20 text-white">
                <div className="mx-auto max-w-5xl text-center">
                    <p className="mb-2.5 sm:mb-3 text-xs sm:text-sm font-medium uppercase tracking-widest text-gray-400">
                        Get In Touch
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Contact Us
                    </h1>

                    <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-gray-400">
                        Have a question about our artists, services, or your next
                        tattoo? Get in touch with us and we&apos;ll be happy to help.
                    </p>
                </div>
            </section>

            {/* Contact Information + Form */}
            <section className="px-4 py-12 sm:py-16">
                <div className="mx-auto grid max-w-6xl gap-8 sm:gap-12 lg:grid-cols-2">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-950 dark:text-white">
                            Let&apos;s Talk Ink
                        </h2>

                        <p className="mt-2 sm:mt-3 max-w-lg text-sm sm:text-base text-gray-600 dark:text-gray-300">
                            Whether you have a question about our services, want to
                            discuss a tattoo idea, or need more information about the
                            studio, feel free to reach out.
                        </p>

                        <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
                            {/* Phone */}
                            <div className="flex gap-3.5 sm:gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-900 border border-transparent dark:border-gray-800 text-gray-900 dark:text-white">
                                    <Phone className="h-5 w-5" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-sm sm:text-base text-gray-950 dark:text-white">Phone</h3>
                                    <a
                                        href="tel:+251900000000"
                                        className="text-sm sm:text-base text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition"
                                    >
                                        +251 900 000 000
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-3.5 sm:gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-900 border border-transparent dark:border-gray-800 text-gray-900 dark:text-white">
                                    <Mail className="h-5 w-5" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-sm sm:text-base text-gray-950 dark:text-white">Email</h3>
                                    <a
                                        href="mailto:hello@inkstudio.com"
                                        className="text-sm sm:text-base text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition break-all"
                                    >
                                        hello@inkstudio.com
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex gap-3.5 sm:gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-900 border border-transparent dark:border-gray-800 text-gray-900 dark:text-white">
                                    <MapPin className="h-5 w-5" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-sm sm:text-base text-gray-950 dark:text-white">Studio</h3>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                                        123 Example Street
                                        <br />
                                        Addis Ababa, Ethiopia
                                    </p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex gap-3.5 sm:gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-900 border border-transparent dark:border-gray-800 text-gray-900 dark:text-white">
                                    <Clock className="h-5 w-5" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-sm sm:text-base text-gray-950 dark:text-white">Opening Hours</h3>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                                        Monday – Saturday
                                        <br />
                                        9:00 AM – 7:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="mt-8 sm:mt-10 border-t border-gray-200 dark:border-gray-800 pt-6 sm:pt-8">
                            <h3 className="font-semibold text-sm sm:text-base text-gray-950 dark:text-white">Follow Our Work</h3>

                            <div className="mt-4 flex gap-3">
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                                >
                                    <FaInstagram />
                                </a>

                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                                >
                                    <FaFacebook />
                                </a>

                                <a
                                    href="#"
                                    aria-label="TikTok"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                                >
                                    <FaTiktok />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-5 sm:p-8 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-950 dark:text-white">
                            Send Us a Message
                        </h2>

                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Fill out the form below and we&apos;ll get back to you
                            as soon as possible.
                        </p>

                        <form className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-gray-950 dark:text-gray-200"
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
                                    className="mb-2 block text-sm font-medium text-gray-950 dark:text-gray-200"
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
                                    className="mb-2 block text-sm font-medium text-gray-950 dark:text-gray-200"
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
                                    className="mb-2 block text-sm font-medium text-gray-950 dark:text-gray-200"
                                >
                                    Subject
                                </label>

                                <select
                                    id="subject"
                                    name="subject"
                                    className="flex h-11 md:h-10 w-full rounded-md border border-input bg-background dark:bg-gray-900 text-foreground dark:text-white px-3 py-2 text-base md:text-sm outline-none focus:ring-2 focus:ring-ring"
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled className="dark:bg-gray-900">
                                        Select a subject
                                    </option>
                                    <option value="general" className="dark:bg-gray-900">
                                        General Question
                                    </option>
                                    <option value="tattoo" className="dark:bg-gray-900">
                                        Tattoo Inquiry
                                    </option>
                                    <option value="pricing" className="dark:bg-gray-900">
                                        Pricing
                                    </option>
                                    <option value="aftercare" className="dark:bg-gray-900">
                                        Aftercare
                                    </option>
                                    <option value="artist" className="dark:bg-gray-900">
                                        Artist Inquiry
                                    </option>
                                    <option value="other" className="dark:bg-gray-900">
                                        Other
                                    </option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium text-gray-950 dark:text-gray-200"
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
                                className="w-full bg-gray-950 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                            >
                                <Send className="mr-2 h-4 w-4" />
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Location */}
            <section className="bg-gray-50 dark:bg-gray-900/50 px-4 py-12 sm:py-16 border-t border-transparent dark:border-gray-800">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-6 sm:mb-8">
                        <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
                            Visit Us
                        </p>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-950 dark:text-white">
                            Find Our Studio
                        </h2>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-200 dark:bg-gray-900">
                        <div className="flex h-64 sm:h-80 items-center justify-center p-4">
                            <div className="text-center text-gray-500 dark:text-gray-400">
                                <MapPin className="mx-auto mb-3 h-8 w-8 sm:h-10 sm:w-10 text-gray-700 dark:text-gray-300" />

                                <p className="font-medium text-base sm:text-lg text-gray-900 dark:text-white">
                                    Studio Location
                                </p>

                                <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                    123 Example Street, Addis Ababa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-950 px-4 py-12 sm:py-16 text-center text-white">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-2xl sm:text-3xl font-bold">
                        Ready for Your Next Tattoo?
                    </h2>

                    <p className="mt-3 text-sm sm:text-base text-gray-400">
                        Tell us about your idea and let&apos;s bring it to life.
                    </p>

                    <div className="mt-6">
                        <Link href="/appointment">
                            <Button
                                size="lg"
                                className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto"
                            >
                                Book an Appointment
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}