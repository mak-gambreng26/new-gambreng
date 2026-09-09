import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A6B45",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#EDF7EF",
          foreground: "#0A6B45",
        },
        surface: "#FFFFFF",
        "surface-soft": "#F8FCF8",
        "border-soft": "#DDEBE0",
        success: "#2E9D68",
        warning: "#B9852E",
        danger: "#C65B5B",
        body: "#18372B",
        muted: "#6E8379",
        background: "#F3F8F2",
        monitoring: "#0A0A0A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "page-title": ["24px", { lineHeight: "30px", fontWeight: "700" }],
        "card-title": ["16px", { lineHeight: "22px", fontWeight: "600" }],
        "main-number": ["40px", { lineHeight: "44px", fontWeight: "700" }],
        caption: ["12px", { lineHeight: "16px" }],
      },
      borderRadius: {
        card: "22px",
        button: "16px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 14px 36px rgba(30, 82, 55, 0.08)",
        card: "0 8px 24px rgba(30, 82, 55, 0.07)",
        lifted: "0 18px 40px rgba(30, 82, 55, 0.10)",
      },
      spacing: {
        safe: "20px",
        "bottom-safe": "34px",
      },
      maxWidth: {
        mobile: "430px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
