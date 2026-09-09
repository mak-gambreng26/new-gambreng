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
          DEFAULT: "#008438",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F6FFF3",
          foreground: "#008438",
        },
        success: "#16A34A",
        warning: "#F59E0B",
        danger: "#EF4444",
        body: "#333333",
        muted: "#999999",
        background: "#FAFAFA",
        monitoring: "#0A0A0A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "page-title": ["24px", { lineHeight: "30px", fontWeight: "700" }],
        "card-title": ["16px", { lineHeight: "22px", fontWeight: "600" }],
        "main-number": ["40px", { lineHeight: "44px", fontWeight: "700" }],
        // NOTE: no "body" key here on purpose — `colors.body` already owns the
        // `text-body` utility (text color). Default body copy size (14px) is
        // set once on the <body> element in globals.css instead, to avoid two
        // theme scales (color vs fontSize) both trying to generate `text-body`.
        caption: ["12px", { lineHeight: "16px" }],
      },
      borderRadius: {
        card: "20px",
        button: "16px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0, 0, 0, 0.06)",
        card: "0 4px 16px rgba(0, 0, 0, 0.05)",
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
