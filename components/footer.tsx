import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="mt-12 sm:mt-20 bg-gray-950 text-gray-400">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid gap-8 sm:gap-10 md:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            Art of Ink
                        </h3>

                        <p className="mt-4 leading-7">
                            Crafting meaningful tattoos through creativity,
                            precision, and artistic expression.
                        </p>

                        <div className="mt-6 flex gap-4">
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="transition hover:text-white"
                            >
                                <FaInstagram size={20} />
                            </a>

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="transition hover:text-white"
                            >
                                <FaFacebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">
                            Navigation
                        </h4>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="transition hover:text-white"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about-us"
                                    className="transition hover:text-white"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/gallery"
                                    className="transition hover:text-white"
                                >
                                    Gallery
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact-us"
                                    className="transition hover:text-white"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Studio */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">
                            Studio
                        </h4>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/artists"
                                    className="transition hover:text-white"
                                >
                                    Artists
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/appointment"
                                    className="transition hover:text-white"
                                >
                                    Book Appointment
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/faq"
                                    className="transition hover:text-white"
                                >
                                    FAQ
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/aftercare"
                                    className="transition hover:text-white"
                                >
                                    Aftercare Guide
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">
                            Contact
                        </h4>

                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <MapPin className="mt-1 h-4 w-4 shrink-0" />
                                <span className="break-words">
                                    Kera Downtown Building
                                    <br />
                                    Addis Ababa, Ethiopia
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <Phone className="h-4 w-4 shrink-0" />
                                <span>+251 912 00 00 00</span>
                            </div>

                            <div className="flex gap-3">
                                <Mail className="h-4 w-4 shrink-0" />
                                <span className="break-all">info@artofink.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 sm:mt-16 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Ready for Your Next Tattoo?
                    </h3>

                    <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base">
                        Let's bring your idea to life with a custom tattoo
                        designed just for you.
                    </p>

                    <Link
                        href="/appointment"
                        className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200 text-sm sm:text-base"
                    >
                        Book an Appointment
                    </Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:px-6 py-6 text-xs sm:text-sm md:flex-row">
                    <p className="text-center md:text-left">
                        © 2026 Art of Ink. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link
                            href="/privacy-policy"
                            className="hover:text-white"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="hover:text-white"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
