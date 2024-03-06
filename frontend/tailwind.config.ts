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
        "dark": "#4D4D4D",
        "light": "#616161",
        "main": "#828282",
        "primary": "#344b88",
        "primary-light": "#e8ebf2",
        "secondary": "#ffb606",
        "secondary-light": "#fff8e6",
        "tertiary": "#78909C",
        "tertiary-light": "#F2F5F7",
        "fc-dark": "#4D4D4D",
        "fc-light": "#616161",
        "fc-main": "#828282",
        "initiated": "#1ABBB9",
        "inProgress": "#FFB508",
        "success": "#18AB56",
        "cancelled": "#EB5757",
        "grid": "#333333",
        "chip": "#F7FDEE",
      },

      fontSize: {
        "semi-base": "15px", //"0.938rem",
      },
    },

    fontFamily: {
      // "aller": ["Aller", "sans-serif"],
      // "aller-display": ["Aller Display", "sans-serif"],
      // "aller-light": ["Aller Light", "sans-serif"],
      // "century-gotic": ["Century Gothic", "sans-serif"],
      Inter: ['Inter var', 'sans-serif'],
    },
    container: {
      padding: "8rem"
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: "#LMS",
};
export default config;
