/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        system: "-apple-system",
      },
      colors: {
        bg: {
          one: "rgb(var(--base-black) / <alpha-value>)",
          two: "rgb(var(--base-950) / <alpha-value>)",
        },
        sh: {
          one: "rgb(var(--base-900) / <alpha-value>)",
          two: "rgb(var(--base-850) / <alpha-value>)",
          three: "rgb(var(--base-800) / <alpha-value>)",
        },
        tx: {
          one: "rgb(var(--base-200) / <alpha-value>)",
          two: "rgb(var(--base-500) / <alpha-value>)",
          three: "rgb(var(--base-700) / <alpha-value>)",
        },
        re: {
          one: "rgb(var(--base-red-400) / <alpha-value>)",
          two: "rgb(var(--base-red-600) / <alpha-value>)",
        },
        or: {
          one: "rgb(var(--base-orange-400) / <alpha-value>)",
          two: "rgb(var(--base-orange-600) / <alpha-value>)",
        },
        ye: {
          one: "rgb(var(--base-yellow-400) / <alpha-value>)",
          two: "rgb(var(--base-yellow-600) / <alpha-value>)",
        },
        gr: {
          one: "rgb(var(--base-green-400) / <alpha-value>)",
          two: "rgb(var(--base-green-600) / <alpha-value>)",
        },
        cy: {
          one: "rgb(var(--base-cyan-400) / <alpha-value>)",
          two: "rgb(var(--base-cyan-600) / <alpha-value>)",
        },
        bl: {
          one: "rgb(var(--base-blue-400) / <alpha-value>)",
          two: "rgb(var(--base-blue-600) / <alpha-value>)",
        },
        pu: {
          one: "rgb(var(--base-purple-400) / <alpha-value>)",
          two: "rgb(var(--base-purple-600) / <alpha-value>)",
        },
        ma: {
          one: "rgb(var(--base-magenta-400) / <alpha-value>)",
          two: "rgb(var(--base-magenta-600) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
