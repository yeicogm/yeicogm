export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#070a16",
        accent: "#60d6ff",
        "accent-soft": "rgba(96, 214, 255, 0.16)",
        "text-muted": "#9aa3c1",
      },
      boxShadow: {
        glow: "0 28px 90px rgba(0, 0, 0, 0.38)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
