import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="ml-auto flex max-w-3xl items-center gap-8 px-4 py-4">
                <Link href="/" className="text-sm font-medium text-gray-700 transition hover:text-black"
                >Home</Link>
                <Link href="/about-us" className="text-sm font-medium text-gray-700 transition hover:text-black"
                >About Us</Link>
                <Link href="/contact-us" className="text-sm font-medium text-gray-700 transition hover:text-black"
                >Contact Us</Link>
                <Link href="/gallery" className="text-sm font-medium text-gray-700 transition hover:text-black"
                >Gallery</Link>
            </div>
        </nav>
    )
}