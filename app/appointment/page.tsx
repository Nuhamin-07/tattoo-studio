"use client";

import * as React from "react";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Appointment() {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    return (
        <main className="mx-auto mt-10 px-12 py-10 shadow-lg rounded-lg"
        // style={{
        //     backgroundImage: "url('/images/appointment-bg.jpg')",
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     backgroundRepeat: "no-repeat",
        // }}
        >
            <div className="mb-10 text-center bg-white/80 px-4 py-8 rounded-lg">
                <h1 className="text-3xl font-bold">
                    Book an Appointment
                </h1>

                <p className="mt-2 text-gray-600">
                    Tell us about your tattoo and choose your preferred
                    artist, date, and time.
                </p>
            </div>

            <form className="space-y-10">
                {/* Artist */}
                <section>
                    <h2 className="mb-4 text-xl font-semibold">
                        Choose Your Artist
                    </h2>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {["Dereje", "Selam", "Dawit", "Alem"].map(
                            (artist) => (
                                <label
                                    key={artist}
                                    className="cursor-pointer"
                                >
                                    <input
                                        type="radio"
                                        name="artist"
                                        value={artist}
                                        className="peer sr-only"
                                    />

                                    <div className="rounded-lg border bg-gray-100 px-4 py-3 text-center transition hover:bg-gray-200 peer-checked:border-black peer-checked:bg-gray-900 peer-checked:text-white">
                                        {artist}
                                    </div>
                                </label>
                            )
                        )}
                    </div>
                </section>

                {/* Service */}
                <section>
                    <h2 className="mb-4 text-xl font-semibold">
                        Choose Your Service
                    </h2>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {[
                            {
                                id: "consultation",
                                label: "Tattoo Consultation",
                            },
                            {
                                id: "custom-tattoo",
                                label: "Custom Tattoo",
                            },
                            {
                                id: "cover-up",
                                label: "Cover Up Tattoo",
                            },
                            {
                                id: "touch-up",
                                label: "Touch Up Tattoo",
                            },
                        ].map((service) => (
                            <label
                                key={service.id}
                                className="cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="service"
                                    value={service.label}
                                    className="peer sr-only"
                                />

                                <div className="rounded-lg border bg-gray-100 px-4 py-4 transition hover:bg-gray-200 peer-checked:border-black peer-checked:bg-gray-900 peer-checked:text-white">
                                    {service.label}
                                </div>
                            </label>
                        ))}
                    </div>
                </section>

                {/* Date & Time */}
                <section>
                    <h2 className="mb-4 text-xl font-semibold">
                        Preferred Date & Time
                    </h2>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {/* Date */}
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Date
                            </label>

                            <Popover
                                open={open}
                                onOpenChange={setOpen}
                            >
                                <PopoverTrigger
                                    render={
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="w-full justify-between font-normal"
                                        >
                                            {date ? format(date, "PPP") : "Select date"}
                                            <ChevronDownIcon />
                                        </Button>
                                    }
                                />

                                <PopoverContent
                                    className="w-auto p-0"
                                    align="start"
                                >
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        captionLayout="dropdown"
                                        defaultMonth={date}
                                        onSelect={(selectedDate) => {
                                            setDate(selectedDate);
                                            setOpen(false);
                                        }}
                                        disabled={(date) => {
                                            const today = new Date();
                                            today.setHours(0, 0, 0, 0);

                                            return date < today;
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        {/* Time */}
                        <div>
                            <label
                                htmlFor="appointment-time"
                                className="mb-2 block text-sm font-medium"
                            >
                                Time
                            </label>

                            <Input
                                type="time"
                                id="appointment-time"
                                name="appointmentTime"
                                className="w-full"
                            />
                        </div>
                    </div>
                </section>

                {/* Customer Information */}
                <section>
                    <h2 className="mb-4 text-xl font-semibold">
                        Your Information
                    </h2>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium"
                            >
                                Full Name
                            </label>

                            <Input
                                id="name"
                                name="name"
                                placeholder="Your full name"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium"
                            >
                                Email
                            </label>

                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="phone"
                                className="mb-2 block text-sm font-medium"
                            >
                                Phone Number
                            </label>

                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="+251 ..."
                                required
                            />
                        </div>
                    </div>
                </section>

                {/* Tattoo Details */}
                <section>
                    <h2 className="mb-4 text-xl font-semibold">
                        Tattoo Details
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <label
                                htmlFor="tattoo-idea"
                                className="mb-2 block text-sm font-medium"
                            >
                                Tell us about your tattoo
                            </label>

                            <Textarea
                                id="tattoo-idea"
                                name="tattooIdea"
                                placeholder="Describe your tattoo idea..."
                                className="min-h-32"
                            />
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="placement"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Preferred Placement
                                </label>

                                <Input
                                    id="placement"
                                    name="placement"
                                    placeholder="e.g. Forearm, shoulder..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="size"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Approximate Size
                                </label>

                                <Input
                                    id="size"
                                    name="size"
                                    placeholder="e.g. 10 cm"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Submit */}
                <div className="border-t pt-6">
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full sm:w-auto"
                        style={{ display: "block", margin: "0 auto", width: "100%" }}
                    >
                        Request Appointment
                    </Button>
                </div>
            </form>
        </main>
    );
}