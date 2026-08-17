import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-3xl justify-around px-2 py-4">
                <Link href="/">Home</Link>
                <Link href="/about-us">About Us</Link>
                <Link href="/contact-us">Contact Us</Link>
                <Link href="/gallery">Gallery</Link>
            </div>
        </nav>
    )
}