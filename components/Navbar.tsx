"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const links = [
        { href: "/", label: "Home" },
        { href: "/about-us", label: "About" },
        { href: "/gallery", label: "Gallery" },
        { href: "/artists", label: "Artists" },
        { href: "/contact-us", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur dark:border-gray-800/80 dark:bg-gray-950/95 transition-colors">
            <div className="mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2.5 sm:gap-3" onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-gray-950 text-xs sm:text-sm font-bold text-white dark:bg-white dark:text-black transition-colors">
                        TS
                    </div>

                    <div>
                        <h1 className="text-base sm:text-lg font-bold tracking-wide leading-tight text-gray-950 dark:text-white">
                            Tattoo Studio
                        </h1>

                        <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                            Custom Ink & Art
                        </p>
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    {links.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-sm font-medium transition-colors ${
                                    isActive
                                        ? "text-black dark:text-white font-semibold"
                                        : "text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                                }`}
                            >
                                {link.label}

                                {isActive && (
                                    <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-black dark:bg-white" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right side CTA, Theme Toggle & Mobile Toggle */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <ThemeToggle />

                    <Link
                        href="/appointment"
                        className="rounded-full bg-gray-950 px-3 py-1.5 text-xs sm:px-5 sm:py-2.5 sm:text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 shrink-0"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Book Appointment
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-expanded={mobileMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-5 w-5 sm:h-6 sm:w-6" />
                        ) : (
                            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {mobileMenuOpen && (
                <div className="border-b border-gray-200 bg-white px-4 pb-6 pt-3 dark:border-gray-800 dark:bg-gray-950 md:hidden shadow-lg transition-colors">
                    <nav className="flex flex-col space-y-1">
                        {links.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                                        isActive
                                            ? "bg-gray-100 text-black font-semibold dark:bg-gray-900 dark:text-white"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-black dark:text-gray-300 dark:hover:bg-gray-900/60 dark:hover:text-white"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
}
