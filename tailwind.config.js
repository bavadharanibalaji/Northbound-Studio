/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#ECEAE6",
        "paper-dark": "#111317",
        ink: "#14161A",
        "ink-dark": "#EDEDEE",
        steel: "#5B6169",
        "steel-dark": "#9AA0AA",
        signal: "#2F5EFF",
        "signal-soft": "#E4EAFF",
        "signal-soft-dark": "#1B2340",
        line: "#D8D4CC",
        "line-dark": "#2A2D33",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-grotesk)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.28em",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 40s linear infinite",
      },
    },
  },
  plugins: [],
};
