export default function Footer() {
    return (
        <footer className="bg-gray-900 py-12 text-gray-400 mt-20">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-white font-semibold mb-4 text-xl">Art of ink</h3>
                    <p>Crafting unique, meaningful tattoos with precision and passion.</p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-white transition">Home</a></li>
                        <li><a href="/services" className="hover:text-white transition">Services</a></li>
                        <li><a href="/gallery" className="hover:text-white transition">Gallery</a></li>
                        <li><a href="/contact-us" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Contact Info</h3>
                    <p>123 Tattoo Street</p>
                    <p>Addis Ababa, Ethiopia</p>
                    <p>+251 912 345 678</p>
                    <p>[EMAIL_ADDRESS]</p>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-12 py-6 text-center">
                <p>&copy; 2026 Art of ink. All rights reserved.</p>
            </div>
        </footer>
    )
}