module.exports = {
  mode: "jit",
  purge: ["./src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
      },
      screens: {
        DEFAULT: "76.875rem",
      },
    },
    fontFamily: {
      heading: ['"Cormorant Garamond", serif'],
      display: ['"Bebas Neue", sans-serif'],
      body: ['"Heebo", sans-serif'],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in",
      },
      boxShadow: {
        "3xl": "0px 4px 40px rgba(0, 0, 0, 0.06)",
      },
      colors: {
        gray: {
          // 900: "",
          // 800: "",
          // 700: "",
          600: "#4D4A47",
          //  500: "",
          400: "#807D7C",
          300: "#949291",
          // 200: "",
          100: "#E6E6E6",
          50: "#F9F9F9",
        },
        "primary-900": "#041F2E",
        // "primary-800": "",
        // "primary-700": "",
        "primary-600": "#035580",
        //   "primary-500": "",
        "primary-400": "#0D77AE",
        // "primary-300": "",
        //   "primary-200": "",
        //   "primary-100": "",
        "primary-50": "#BFE9FF",

        // "secondary-900": "",
        // "secondary-800": "",
        // "secondary-700": "",
        // "secondary-600": "",
        // "secondary-500": "",
        // "secondary-400": "",
        // "secondary-300": "",
        // "secondary-200": "",
        // "secondary-100": "",
        // "secondary-50": "",
      },
      fontSize: {
        "2xs": ".625rem",
        sm: ["0.875rem", "1.5rem"],
        md: ".9375rem",
        lg: ["1.125rem", "1.5rem"],
        xl: ["1.25rem", "1.875rem"],
        "2xl": ["1.375rem", "2rem"],
        "3xl": ["1.5rem", "1.813rem"],
        "4xl": ["1.875rem", "2.25rem"],
        "5xl": ["2.25rem", "2.75rem"],
        "6xl": ["2.625rem", "3.188rem"],
        "7xl": ["3.125rem", "3.784rem"],
        "8xl": ["3.5rem", "4.25rem"],
        "mobile-lg": ["1rem", "1.75rem"],
        "mobile-xl": ["1rem", "1.875rem"],
        "mobile-2xl": ["1.375rem", "2rem"],
        "mobile-3xl": ["1.5rem", "2.125rem"],
        "mobile-4xl": ["1.625rem", "1.875rem"],
        "mobile-5xl": ["2.063rem", "2.5rem"],
        "mobile-6xl": ["2.375rem", "2.875rem"],
        "mobile-7xl": ["2.063rem", "2.498rem"],
        "mobile-8xl": ["3.5rem", "4rem"],
      },
      height: {
        "50vh": "50vh",
        "50vw": "50vw",
        "75vh": "75vh",
        "75vw": "75vw",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      letterSpacing: {
        wider: "0.08em",
        widest: "0.16em",
      },
      ringWidth: {
        3: "3px",
      },
      screens: {
        xs: "480px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        104: "26rem",
      },
      width: {
        "50vw": "50vw",
        "75vw": "75vw",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
