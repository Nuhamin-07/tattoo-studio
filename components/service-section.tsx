import services from "@/data/services";
import { Card, CardContent, CardTitle } from "./ui/card";


export default function ServiceSection() {
    return (
        <section>
            <h2 className="text-5xl font-bold text-center mt-10">What We Do</h2>
            <p className="text-center text-xl mt-2 text-gray-400 font-light">Turning ideas into permanent art.</p>

            <div className="mt-10 grid grid-cols-1 gap-8 px-10 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <Card key={service.id}>
                        <img
                            src={service.image}
                            alt={service.alt}
                            className="h-56 w-full object-cover"
                        />
                        <CardTitle className="px-4 pt-2 pb-0">

                            <h3 className="text-xl font-semibold">
                                {service.title}
                            </h3>
                        </CardTitle>
                        <CardContent className="pt-0 text-medium text-gray-900">
                            <p>
                                {service.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}