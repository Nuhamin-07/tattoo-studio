import services from "@/data/services";
import { Card, CardContent, CardTitle } from "./ui/card";

export default function ServiceSection() {
    return (
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-3xl font-bold text-center mt-4 sm:text-4xl md:text-5xl text-gray-950 dark:text-white">What We Do</h2>
                <p className="text-center text-base sm:text-xl mt-2 text-gray-500 dark:text-gray-400 font-light max-w-xl mx-auto">Turning ideas into permanent art.</p>

                <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <Card key={service.id} className="dark:bg-gray-900/60 dark:border-gray-800">
                            <img
                                src={service.image}
                                alt={service.alt}
                                className="h-48 sm:h-56 w-full object-cover"
                            />
                            <CardTitle className="px-4 pt-2 pb-0">
                                <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
                                    {service.title}
                                </h3>
                            </CardTitle>
                            <CardContent className="pt-0 text-gray-700 dark:text-gray-300">
                                <p>
                                    {service.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}