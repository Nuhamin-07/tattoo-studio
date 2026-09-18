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

const artists = ["Dereje", "Selam", "Dawit", "Alem"];

const services = [
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
];

export default function Appointment() {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    return (
        <main
            className="relative min-h-screen bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: "url('/images/appointment-bg.jpg')",
            }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Page Content */}
            <div className="relative px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    {/* Header */}
                    <div className="mb-8 text-center text-white">
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-300">
                            Start Your Tattoo Journey
                        </p>

                        <h1 className="text-4xl font-bold md:text-5xl">
                            Book an Appointment
                        </h1>

                        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
                            Tell us about your tattoo idea and choose your
                            preferred artist, date, and time.
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="rounded-2xl bg-white/95 p-6 shadow-2xl backdrop-blur-sm md:p-10">
                        <form className="space-y-10">
                            {/* Artist */}
                            <section>
                                <div className="mb-5">
                                    <h2 className="text-xl font-semibold">
                                        Choose Your Artist
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Select the artist you would like to work
                                        with.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    {artists.map((artist) => (
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

                                            <div className="rounded-xl border bg-gray-50 px-4 py-4 text-center font-medium transition-all hover:border-gray-400 hover:bg-gray-100 peer-checked:border-gray-950 peer-checked:bg-gray-950 peer-checked:text-white">
                                                {artist}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </section>

                            <div className="border-t" />

                            {/* Service */}
                            <section>
                                <div className="mb-5">
                                    <h2 className="text-xl font-semibold">
                                        Choose Your Service
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        What type of tattoo service are you
                                        looking for?
                                    </p>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    {services.map((service) => (
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

                                            <div className="rounded-xl border bg-gray-50 px-4 py-4 font-medium transition-all hover:border-gray-400 hover:bg-gray-100 peer-checked:border-gray-950 peer-checked:bg-gray-950 peer-checked:text-white">
                                                {service.label}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </section>

                            <div className="border-t" />

                            {/* Date & Time */}
                            <section>
                                <div className="mb-5">
                                    <h2 className="text-xl font-semibold">
                                        Preferred Date & Time
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Choose a convenient date and preferred
                                        time for your appointment.
                                    </p>
                                </div>

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
                                                        className="h-10 w-full justify-between bg-white font-normal"
                                                    >
                                                        {date
                                                            ? format(
                                                                date,
                                                                "PPP"
                                                            )
                                                            : "Select date"}

                                                        <ChevronDownIcon className="h-4 w-4" />
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
                                                        const today =
                                                            new Date();

                                                        today.setHours(
                                                            0,
                                                            0,
                                                            0,
                                                            0
                                                        );

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
                                            className="h-10 bg-white"
                                            required
                                        />
                                    </div>
                                </div>
                            </section>

                            <div className="border-t" />

                            {/* Customer Information */}
                            <section>
                                <div className="mb-5">
                                    <h2 className="text-xl font-semibold">
                                        Your Information
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Please provide your contact information
                                        so we can reach you.
                                    </p>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    {/* Name */}
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
                                            className="bg-white"
                                        />
                                    </div>

                                    {/* Email */}
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
                                            className="bg-white"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="sm:col-span-2">
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
                                            className="bg-white"
                                        />
                                    </div>
                                </div>
                            </section>

                            <div className="border-t" />

                            {/* Tattoo Details */}
                            <section>
                                <div className="mb-5">
                                    <h2 className="text-xl font-semibold">
                                        Tattoo Details
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Give us a few details about the tattoo
                                        you have in mind.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {/* Tattoo Idea */}
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
                                            placeholder="Describe your tattoo idea, design, inspiration, or anything else you'd like us to know..."
                                            className="min-h-32 resize-none bg-white"
                                        />
                                    </div>

                                    {/* Placement + Size */}
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
                                                className="bg-white"
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
                                                className="bg-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Submit */}
                            <div className="border-t pt-8">
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-gray-950 text-white hover:bg-gray-800"
                                >
                                    Request Appointment
                                </Button>

                                <p className="mt-3 text-center text-xs text-gray-500">
                                    Your appointment request will be reviewed
                                    by our team before confirmation.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}