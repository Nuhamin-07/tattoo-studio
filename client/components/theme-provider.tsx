"use client";

import * as React from "react";

type Theme = "light" | "dark" | "system";

interface ThemeProviderContextType {
    theme: Theme;
    resolvedTheme: "light" | "dark";
    setTheme: (theme: Theme) => void;
}

const ThemeProviderContext = React.createContext<ThemeProviderContextType>({
    theme: "system",
    resolvedTheme: "light",
    setTheme: () => null,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = React.useState<Theme>("system");
    const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">("light");

    // Initialize theme state after mount
    React.useEffect(() => {
        const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
        setThemeState(savedTheme);
    }, []);

    // Update classList on html element when theme changes
    React.useEffect(() => {
        const root = document.documentElement;

        const updateTheme = () => {
            let activeTheme: "light" | "dark" = "light";

            if (theme === "system") {
                const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                activeTheme = systemDark ? "dark" : "light";
            } else {
                activeTheme = theme;
            }

            setResolvedTheme(activeTheme);

            if (activeTheme === "dark") {
                root.classList.add("dark");
            } else {
                root.classList.remove("dark");
            }
        };

        updateTheme();

        // Listen for system preference changes if in system mode
        if (theme === "system") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const handleChange = () => updateTheme();
            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, [theme]);

    const setTheme = React.useCallback((newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem("theme", newTheme);
    }, []);

    return (
        <ThemeProviderContext.Provider value={{ theme, resolvedTheme, setTheme }}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export function useTheme() {
    const context = React.useContext(ThemeProviderContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
