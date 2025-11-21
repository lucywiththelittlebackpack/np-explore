import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#f8fafc", // Slate 50 (Light background for fresh feel)
                foreground: "#0f172a", // Slate 900
                brand: {
                    primary: "#166534", // Green 700 (Forest Green)
                    secondary: "#15803d", // Green 600
                    accent: "#0ea5e9", // Sky 500 (Ocean/Sky)
                    sand: "#f59e0b", // Amber 500 (Sun/Sand - kept for warmth)
                    dark: "#022c22", // Green 950 (Deep Forest)
                },
                surface: {
                    DEFAULT: "#ffffff", // White
                    hover: "#f1f5f9", // Slate 100
                    dark: "#1e293b", // Slate 800 (for dark mode elements if needed)
                }
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                display: ["var(--font-outfit)", "sans-serif"],
            },
            backgroundImage: {
                'hero-pattern': "url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2000')",
            },
        },
    },
    plugins: [],
};
export default config;
