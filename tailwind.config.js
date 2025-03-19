/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
];
export const theme = {
    extend: {
        colors: {
            focus: "#F5C842",
            alert: "#f56565",
            primary: "#088841",
            dark: "#222222",
            light: "#ffffff",
            secondary: "#9FA6AB"
        },
        fontFamily: {
            content: "var(--font-secondary)",
            priamry: "var(--font-primary)",
            focus: "var(--font-focus)"
        }
    },
};
export const plugins = [];

