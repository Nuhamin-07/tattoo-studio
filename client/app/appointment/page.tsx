"use client";

import { useState } from "react";
import Image from "next/image";
import {
    CalendarDays,
    Clock3,
    Upload,
    Check,
    Sparkles,
    ShieldCheck,
    CheckCircle2,
    FileText,
    X,
    Loader2,
    ArrowRight,
    HelpCircle,
} from "lucide-react";
import artists from "@/data/artists";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const services = [
    {
        name: "Tattoo Consultation",
        description: "Discuss design concepts, placement & sizing with an artist.",
    },
    {
        name: "Custom Tattoo",
        description: "Original bespoke artwork tailored specifically for you.",
    },
    {
        name: "Cover Up Tattoo",
        description: "Transform existing tattoos into a fresh new piece.",
    },
    {
        name: "Touch Up Tattoo",
        description: "Refresh and refine details on existing work.",
    },
];

export default function AppointmentPage() {
    const [selectedArtist, setSelectedArtist] = useState<string>("");
    const [selectedService, setSelectedService] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDragOver, setIsDragOver] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setIsDragOver(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setSelectedFile(e.dataTransfer.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1200);
    };

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-amber-500 selection:text-black">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-zinc-950 py-16 sm:py-24 text-white border-b border-zinc-800/80">
                {/* Ambient background glow */}
                <div
                    aria-hidden="true"
                    className="absolute -top-40 left-1/2 -z-0 -translate-x-1/2 blur-3xl opacity-25 pointer-events-none"
                >
                    <div className="aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-amber-600 via-rose-700 to-amber-400" />
                </div>

                <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-amber-400 backdrop-blur-md">
                        <Sparkles className="h-3.5 w-3.5" />
                        Start Your Tattoo Journey
                    </div>

                    <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
                        Book an Appointment
                    </h1>

                    <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-xl text-zinc-400 font-normal leading-relaxed">
                        Tell us about your idea and we&apos;ll connect you with the
                        right artist.
                    </p>

                    {/* Quick highlights */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-zinc-400 border-t border-zinc-800/80 pt-6">
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck className="h-4 w-4 text-amber-400" />
                            Sterile &amp; Certified Studio
                        </span>
                        <span className="hidden sm:inline text-zinc-700">•</span>
                        <span className="flex items-center gap-1.5">
                            <Sparkles className="h-4 w-4 text-amber-400" />
                            1-on-1 Artist Consultation
                        </span>
                        <span className="hidden sm:inline text-zinc-700">•</span>
                        <span className="flex items-center gap-1.5">
                            <FileText className="h-4 w-4 text-amber-400" />
                            Custom Design Process
                        </span>
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-10 lg:gap-12 lg:grid-cols-[1fr_1.25fr]">
                    {/* Left Column - Studio Info & Experience Step Timeline */}
                    <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
                        {/* Studio Image Card */}
                        <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl bg-zinc-900">
                            <div className="relative h-64 sm:h-80 lg:h-[420px] w-full overflow-hidden">
                                <Image
                                    src="/images/appointment-bg.jpg"
                                    alt="Tattoo Studio Interior"
                                    width={800}
                                    height={1000}
                                    priority
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                            </div>

                            <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                                <span className="inline-block rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300 border border-amber-500/30 mb-2">
                                    Private Studio Experience
                                </span>
                                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                                    Artistry &amp; Hygiene Standards
                                </h3>
                                <p className="mt-1 text-xs sm:text-sm text-zinc-300">
                                    Our studio offers a relaxed, fully sterile environment designed for optimal focus and comfort.
                                </p>
                            </div>
                        </div>

                        {/* What Happens Next - Vertical Steps */}
                        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-sm shadow-sm">
                            <div className="flex items-center gap-2 mb-6">
                                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
                                    What Happens Next?
                                </h3>
                            </div>

                            <div className="relative space-y-8 before:absolute before:left-5 before:top-3 before:h-[calc(100%-24px)] before:w-0.5 before:bg-gradient-to-b before:from-amber-500 before:via-zinc-300 dark:before:via-zinc-700 before:to-zinc-200 dark:before:to-zinc-800">
                                {/* Step 1 */}
                                <div className="relative flex gap-4 items-start">
                                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-black font-bold text-sm shadow-md ring-4 ring-zinc-50 dark:ring-zinc-900">
                                        1
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="font-bold text-base sm:text-lg text-zinc-950 dark:text-white leading-snug">
                                            Submit Your Request
                                        </h4>
                                        <p className="mt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            Tell us about your tattoo idea and preferred artist.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative flex gap-4 items-start">
                                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold text-sm border border-zinc-300 dark:border-zinc-700 shadow-md ring-4 ring-zinc-50 dark:ring-zinc-900">
                                        2
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="font-bold text-base sm:text-lg text-zinc-950 dark:text-white leading-snug">
                                            Consultation
                                        </h4>
                                        <p className="mt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            We&apos;ll review your idea and discuss details.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative flex gap-4 items-start">
                                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold text-sm border border-zinc-300 dark:border-zinc-700 shadow-md ring-4 ring-zinc-50 dark:ring-zinc-900">
                                        3
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="font-bold text-base sm:text-lg text-zinc-950 dark:text-white leading-snug">
                                            Get Tattooed
                                        </h4>
                                        <p className="mt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            Visit the studio and bring your vision to life.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Help Card */}
                        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-amber-500/5 dark:bg-amber-500/10 p-5 flex items-start gap-4">
                            <HelpCircle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                                    Have Questions First?
                                </h4>
                                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                                    Need quick advice on pricing or sizing? You can also contact us directly at <span className="font-medium text-amber-600 dark:text-amber-400">+251 912 00 00 00</span>.
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* Right Column - Booking Form */}
                    <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 p-6 sm:p-10 shadow-lg transition-all">
                        {isSubmitted ? (
                            <div className="py-12 text-center space-y-6">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 dark:bg-emerald-500/20 dark:text-emerald-400">
                                    <CheckCircle2 className="h-10 w-10" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white">
                                        Appointment Request Received!
                                    </h3>
                                    <p className="max-w-md mx-auto text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                        Thank you for sharing your vision with us. Our team and artist will review your details and contact you via email or phone within 24 hours.
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <Button
                                        onClick={() => {
                                            setIsSubmitted(false);
                                            setSelectedArtist("");
                                            setSelectedService("");
                                            setSelectedFile(null);
                                        }}
                                        variant="outline"
                                        className="rounded-xl px-6"
                                    >
                                        Submit Another Request
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-10">
                                {/* Section 1: Artist Selection */}
                                <fieldset role="radiogroup" className="space-y-4">
                                    <legend className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white flex items-center justify-between w-full">
                                        <span>Choose Your Artist</span>
                                        <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                                            Optional preference
                                        </span>
                                    </legend>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {artists.map((artist) => {
                                            const isChecked = selectedArtist === artist.name;

                                            return (
                                                <label
                                                    key={artist.name}
                                                    className={`group relative cursor-pointer block overflow-hidden rounded-2xl border transition-all duration-300 focus-within:ring-2 focus-within:ring-amber-500 ${isChecked
                                                            ? "border-amber-500 bg-amber-500/5 dark:bg-amber-500/10 shadow-md ring-2 ring-amber-500/30"
                                                            : "border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 hover:border-zinc-300 dark:hover:border-zinc-700"
                                                        }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="artist"
                                                        value={artist.name}
                                                        checked={isChecked}
                                                        onChange={() => setSelectedArtist(artist.name)}
                                                        className="peer sr-only"
                                                        aria-label={`Select artist ${artist.name}`}
                                                    />

                                                    {/* Selection Indicator Check mark */}
                                                    <div
                                                        className={`absolute top-3 right-3 z-10 flex h-6 w-6 items-center justify-center rounded-full transition-all ${isChecked
                                                                ? "bg-amber-500 text-black scale-100 opacity-100"
                                                                : "bg-zinc-200 dark:bg-zinc-800 text-transparent scale-75 opacity-0 group-hover:opacity-40"
                                                            }`}
                                                    >
                                                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                                                    </div>

                                                    <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                                                        <Image
                                                            src={artist.image}
                                                            alt={`Portrait of ${artist.name}`}
                                                            width={300}
                                                            height={300}
                                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                                                        <div className="absolute bottom-3 left-3 right-3 text-white">
                                                            <span className="text-[10px] uppercase font-semibold tracking-wider text-amber-300/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
                                                                {artist.role}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="p-4 space-y-1">
                                                        <h3 className="font-bold text-base text-zinc-950 dark:text-white leading-tight">
                                                            {artist.name}
                                                        </h3>
                                                        <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium line-clamp-1">
                                                            {artist.specialty}
                                                        </p>
                                                    </div>
                                                </label>
                                            );
                                        })}
                                    </div>
                                </fieldset>

                                {/* Section 2: Service Selection */}
                                <fieldset role="radiogroup" className="space-y-4">
                                    <legend className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
                                        Service
                                    </legend>

                                    <div className="grid gap-3 sm:grid-cols-2">
                                        {services.map((service) => {
                                            const isChecked = selectedService === service.name;

                                            return (
                                                <label
                                                    key={service.name}
                                                    className={`relative cursor-pointer rounded-2xl border p-4 transition-all duration-200 flex items-start justify-between focus-within:ring-2 focus-within:ring-amber-500 ${isChecked
                                                            ? "border-amber-500 bg-amber-500/10 dark:bg-amber-500/15 text-zinc-950 dark:text-white ring-2 ring-amber-500/30"
                                                            : "border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
                                                        }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="service"
                                                        value={service.name}
                                                        checked={isChecked}
                                                        onChange={() => setSelectedService(service.name)}
                                                        className="peer sr-only"
                                                        aria-label={`Select service ${service.name}`}
                                                    />

                                                    <div className="pr-4">
                                                        <div className="font-semibold text-sm sm:text-base text-zinc-950 dark:text-white">
                                                            {service.name}
                                                        </div>
                                                        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                                                            {service.description}
                                                        </p>
                                                    </div>

                                                    <div
                                                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all ${isChecked
                                                                ? "border-amber-500 bg-amber-500 text-black"
                                                                : "border-zinc-400 dark:border-zinc-600 bg-transparent"
                                                            }`}
                                                    >
                                                        {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                                                    </div>
                                                </label>
                                            );
                                        })}
                                    </div>
                                </fieldset>

                                {/* Section 3: Tattoo Details */}
                                <section className="space-y-4">
                                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
                                        Tattoo Details
                                    </h2>

                                    <div className="space-y-4">
                                        <div>
                                            <label
                                                htmlFor="tattoo-description"
                                                className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2"
                                            >
                                                Description &amp; Concept
                                            </label>
                                            <Textarea
                                                id="tattoo-description"
                                                placeholder="Describe your tattoo idea (concept, meaning, key elements)..."
                                                className="min-h-32 rounded-xl border-zinc-300 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 p-3.5 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                                            />
                                        </div>

                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div>
                                                <label
                                                    htmlFor="placement"
                                                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2"
                                                >
                                                    Body Placement
                                                </label>
                                                <Input
                                                    id="placement"
                                                    placeholder="Placement (Forearm, Shoulder, Ribs...)"
                                                    className="rounded-xl border-zinc-300 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 px-3.5 py-2.5 text-sm focus:border-amber-500"
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="approx-size"
                                                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2"
                                                >
                                                    Approximate Size
                                                </label>
                                                <Input
                                                    id="approx-size"
                                                    placeholder="Approximate Size (e.g. 4x6 inches)"
                                                    className="rounded-xl border-zinc-300 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 px-3.5 py-2.5 text-sm focus:border-amber-500"
                                                />
                                            </div>
                                        </div>

                                        {/* Upload Reference Images */}
                                        <div>
                                            <label
                                                htmlFor="file-upload"
                                                className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2"
                                            >
                                                Reference Images
                                            </label>

                                            {selectedFile ? (
                                                <div className="flex items-center justify-between rounded-xl border border-amber-500/40 bg-amber-500/10 p-4">
                                                    <div className="flex items-center gap-3 overflow-hidden">
                                                        <FileText className="h-6 w-6 text-amber-500 shrink-0" />
                                                        <div className="truncate">
                                                            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                                                                {selectedFile.name}
                                                            </p>
                                                            <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                                                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => setSelectedFile(null)}
                                                        className="p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 rounded-lg transition-colors"
                                                        aria-label="Remove uploaded file"
                                                    >
                                                        <X className="h-5 w-5" />
                                                    </button>
                                                </div>
                                            ) : (
                                                <label
                                                    htmlFor="file-upload"
                                                    onDragOver={(e) => {
                                                        e.preventDefault();
                                                        setIsDragOver(true);
                                                    }}
                                                    onDragLeave={() => setIsDragOver(false)}
                                                    onDrop={handleDrop}
                                                    className={`cursor-pointer rounded-2xl border-2 border-dashed p-6 text-center transition-all block ${isDragOver
                                                            ? "border-amber-500 bg-amber-500/10"
                                                            : "border-zinc-300 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 hover:border-amber-500/60 hover:bg-zinc-100/80 dark:hover:bg-zinc-900/60"
                                                        }`}
                                                >
                                                    <Upload className="mx-auto mb-2 h-7 w-7 text-amber-500/80" />
                                                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
                                                        Upload reference images
                                                    </p>
                                                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                                                        Drag and drop or click to browse (PNG, JPG, WEBP)
                                                    </p>

                                                    <input
                                                        id="file-upload"
                                                        type="file"
                                                        className="sr-only"
                                                        accept="image/*"
                                                        onChange={handleFileChange}
                                                    />
                                                </label>
                                            )}
                                        </div>
                                    </div>
                                </section>

                                {/* Section 4: Preferred Date & Time */}
                                <section className="space-y-4">
                                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
                                        Preferred Date &amp; Time
                                    </h2>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="preferred-date"
                                                className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2"
                                            >
                                                Date
                                            </label>
                                            <div className="relative">
                                                <CalendarDays className="absolute left-3.5 top-3 h-4 w-4 text-zinc-400 pointer-events-none z-10" />
                                                <Input
                                                    id="preferred-date"
                                                    type="date"
                                                    min={new Date().toISOString().split("T")[0]}
                                                    className="pl-10 rounded-xl border-zinc-300 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 text-sm focus:border-amber-500"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="preferred-time"
                                                className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2"
                                            >
                                                Time
                                            </label>
                                            <div className="relative">
                                                <Clock3 className="absolute left-3.5 top-3 h-4 w-4 text-zinc-400 pointer-events-none z-10" />
                                                <Input
                                                    id="preferred-time"
                                                    type="time"
                                                    className="pl-10 rounded-xl border-zinc-300 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 text-sm focus:border-amber-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 5: Contact Information */}
                                <section className="space-y-4">
                                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
                                        Your Information
                                    </h2>

                                    <div className="grid gap-4 sm:grid-cols-1">
                                        <div>
                                            <label
                                                htmlFor="full-name"
                                                className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2"
                                            >
                                                Full Name
                                            </label>
                                            <Input
                                                id="full-name"
                                                placeholder="Full Name"
                                                required
                                                className="rounded-xl border-zinc-300 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 px-3.5 py-2.5 text-sm focus:border-amber-500"
                                            />
                                        </div>

                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2"
                                                >
                                                    Email Address
                                                </label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="Email Address"
                                                    required
                                                    className="rounded-xl border-zinc-300 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 px-3.5 py-2.5 text-sm focus:border-amber-500"
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="phone"
                                                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2"
                                                >
                                                    Phone Number
                                                </label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    required
                                                    className="rounded-xl border-zinc-300 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 px-3.5 py-2.5 text-sm focus:border-amber-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Submit & Disclaimer */}
                                <div className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800/80">
                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="group relative w-full h-13 overflow-hidden rounded-2xl bg-zinc-950 dark:bg-amber-500 text-white dark:text-black font-bold text-base transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-amber-400 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-amber-500"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <Loader2 className="h-5 w-5 animate-spin" />
                                                Submitting Request...
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center gap-2">
                                                Request Appointment
                                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        )}
                                    </Button>

                                    <p className="text-center text-xs text-zinc-500 dark:text-zinc-400 flex items-center justify-center gap-1.5 leading-relaxed">
                                        <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                                        Our team will review your request and contact you to confirm your appointment.
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

