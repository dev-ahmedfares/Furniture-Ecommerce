/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        primary: {
          100: "#E58411",
          500: "#F6973F",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        red: {
          100: "#ED1C24",
        },
        blue: {
          100: "#0F2764",
        },
        green: {
          100: "#1EC815",
          200: "#DAFFDB",
        },
        dark: {
          100: "#0B0C0C",
          200: "#221506",
          300: "#464646",
          400: "#292A2A",
          500: "#1E2833",
        },
        light: {
          100: "#ffffff",
          200: "#FBFBFB",
          300: "#F7F7F7",
          400: "#1E1E1E",
          500: "#262626",
          600: "#FAFAFA",
          700: "#8D8D8D",
          750: "#D7D7D7",
          800: "#0D1B39",
          850: "#FDFDFD",
          900: "#FFF9F1",
          950: "#D9D9D9",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        mont: ["var(--font-mont)"],
        rubik: ["var(--font-rubik)"],
        inter: ["var(--font-inter)"],
        dmSans: ["var(--font-dmSans)"],
        gilroy: ["var(--font-gilroy)"],
        agency: ["var(--font-agency)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        bgHome: 'url("/assets/images/bg-home.png")',
        blackOverlay:"linear-gradient(to bottom,rgba(11, 12, 12, 0) 70%,rgba(11, 12, 12, 1) 100%)",
        lightOverlay:"linear-gradient(to bottom,rgba(255, 255, 255, 0) 70%,rgba(255, 255, 255,.7) 100%)",
        blackOverlaySmall:"linear-gradient(to bottom,rgba(11, 12, 12, 0) 0%,rgba(11, 12, 12, 1) 100%)",
        lightOverlaySmall:"linear-gradient(to bottom,rgba(255, 255, 255, 0) 0%,rgba(255, 255, 255,.7) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
