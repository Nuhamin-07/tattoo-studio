"use client"

import Link from 'next/link'
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/about-us", label: "About Us" },
        { href: "/contact-us", label: "Contact Us" },
        { href: "/gallery", label: "Gallery" },
        { href: "/appointment", label: "Book an Appointment" }
    ];
    return (
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
            <div className="flex w-full items-center justify-between gap-8 px-12 py-4">
                <Link href="/"><h3 className="text-xl font-bold text-black transition hover:text-gray-700">Tattoo Studio</h3></Link>
                <div className="flex gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition ${pathname === link.href
                                ? "text-gray-500"
                                : "text-black-500 hover:text-black"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}