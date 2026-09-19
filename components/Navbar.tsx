"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/about-us", label: "About" },
        { href: "/gallery", label: "Gallery" },
        { href: "/contact-us", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur">
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="group">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-950 text-sm font-bold text-white">
                            TS
                        </div>

                        <div>
                            <h1 className="text-lg font-bold tracking-wide">
                                Tattoo Studio
                            </h1>

                            <p className="text-xs text-gray-500">
                                Custom Ink & Art
                            </p>
                        </div>
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
                                className={`relative text - sm font - medium transition - colors ${isActive
                                        ? "text-black"
                                        : "text-gray-500 hover:text-black"
                                    } `}
                            >
                                {link.label}

                                {isActive && (
                                    <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-black" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA */}
                <Link
                    href="/appointment"
                    className="rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
                >
                    Book Appointment
                </Link>
            </div>
        </header>
    );
}
