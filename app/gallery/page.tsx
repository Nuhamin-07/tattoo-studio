import Gallery from "@/components/gallery-preview"
import Footer from "@/components/footer"

export default function GalleryPage() {
    return (
        <main>
            <h2 className="text-5xl font-bold text-center mt-10">Our Work</h2>
            <p className="text-center text-xl mt-2 text-gray-400 font-light">Explore tattoos created by our artists across a variety of styles.</p>
            <Gallery />
            <Footer />
        </main>
    )
}