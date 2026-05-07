import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050a0f",
        bg2: "#0a1520",
        bg3: "#0f1e2e",
        accent: "#00e5ff",
        accent2: "#7c3aed",
        accent3: "#10b981",
        card: "#0d1b2a",
        border: "#1a3050",
        muted: "#607a9a",
        textPrimary: "#e2f0ff",
      },
      fontFamily: {
        mono: ["'Space Mono'", "monospace"],
        sans: ["'Syne'", "sans-serif"],
      },
      animation: {
        pulse2: "pulse2 2s infinite",
        blink: "blink 1s infinite",
        dot: "dot 1.4s infinite",
        fadeIn: "fadeIn 0.6s forwards",
      },
      keyframes: {
        pulse2: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        dot: {
          "0%,80%,100%": { transform: "scale(0.6)", opacity: "0.4" },
          "40%": { transform: "scale(1)", opacity: "1" },
        },
        fadeIn: {
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
