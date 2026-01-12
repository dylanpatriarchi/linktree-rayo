/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0047ff",
                secondary: "#6B7280",
                dark: "#000000",
            },
            fontFamily: {
                sans: ["Helvetica Now Display", "Helvetica", "Arial", "sans-serif"],
            },
        },
    },
    plugins: [],
}
