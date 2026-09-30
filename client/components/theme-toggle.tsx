"use client";

import { useTheme } from "./theme-provider";
import { Sun, Moon, Monitor } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function ThemeToggle({ className = "" }: { className?: string }) {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Close dropdown on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!mounted) {
        return (
            <div className={`h-9 w-9 rounded-full border border-gray-200 bg-transparent dark:border-gray-800 ${className}`} />
        );
    }

    return (
        <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-100 hover:text-black dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                aria-label="Select theme"
                title={`Current theme: ${theme}`}
            >
                {resolvedTheme === "dark" ? (
                    <Moon className="h-4 w-4 text-amber-300" />
                ) : (
                    <Sun className="h-4 w-4 text-amber-500" />
                )}
            </button>

            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg backdrop-blur-md dark:border-gray-800 dark:bg-gray-900 z-50 animate-in fade-in-50 zoom-in-95">
                    <button
                        type="button"
                        onClick={() => {
                            setTheme("light");
                            setDropdownOpen(false);
                        }}
                        className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition ${
                            theme === "light"
                                ? "bg-gray-100 text-black dark:bg-gray-800 dark:text-white"
                                : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white"
                        }`}
                    >
                        <Sun className="h-3.5 w-3.5 text-amber-500" />
                        <span>Light</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setTheme("dark");
                            setDropdownOpen(false);
                        }}
                        className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition ${
                            theme === "dark"
                                ? "bg-gray-100 text-black dark:bg-gray-800 dark:text-white"
                                : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white"
                        }`}
                    >
                        <Moon className="h-3.5 w-3.5 text-indigo-400" />
                        <span>Dark</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setTheme("system");
                            setDropdownOpen(false);
                        }}
                        className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition ${
                            theme === "system"
                                ? "bg-gray-100 text-black dark:bg-gray-800 dark:text-white"
                                : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white"
                        }`}
                    >
                        <Monitor className="h-3.5 w-3.5 text-gray-500" />
                        <span>System</span>
                    </button>
                </div>
            )}
        </div>
    );
}
