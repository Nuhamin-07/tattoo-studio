export default function Artist() {
    return (
        <section>
            <h2 className="text-5xl font-bold text-center mt-10">Meet the Artist</h2>
            <p className="text-center text-xl mt-2 text-gray-400 font-light">Meet the talented artists behind the ink.</p>
            <div className="mt-10 grid grid-cols-1 gap-8 px-10 md:grid-cols-2 lg:grid-cols-3">
                <div key="" className="overflow-hidden rounded-xl shadow-lg">
                    <img
                        src="/images/tattoo-artist-one.jpg"
                        alt="Tattoo artist working on a client"
                        className="h-56 w-full object-cover"
                    />

                    <div className="p-6">
                        <h3 className="text-xl font-semibold">
                            Nuhamin Gulilat
                        </h3>

                        <p className="mt-2 text-gray-600">description</p>
                    </div>
                </div>
            </div>
        </section>

    )
}