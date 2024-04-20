import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        dark: "#4D4D4D",
        light: "#616161",
        main: "#828282",
        primary: "#344b88",
        "primary-light": "#e8ebf2",
        secondary: "#ffb606",
        "secondary-light": "#fff8e6",
        tertiary: "#78909C",
        "tertiary-light": "#F2F5F7",
        "fc-dark": "#4D4D4D",
        "fc-light": "#616161",
        "fc-main": "#828282",
        initiated: "#1ABBB9",
        inProgress: "#FFB508",
        success: "#18AB56",
        cancelled: "#EB5757",
        grid: "#333333",
        chip: "#F7FDEE",
      },

      fontSize: {
        "semi-base": "15px", //"0.938rem",
      },
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      // desktop: "1280px",
      desktop: "1320px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      // "aller": ["Aller", "sans-serif"],
      // "aller-display": ["Aller Display", "sans-serif"],
      // "aller-light": ["Aller Light", "sans-serif"],
      // "century-gotic": ["Century Gothic", "sans-serif"],
      Inter: ["Inter var", "sans-serif"],
    },
    // container: {
    //   padding: "8rem",
    // },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: "1rem",

      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  corePlugins: {
    preflight: false,
  },
  important: "#LMS",
};
export default config;
