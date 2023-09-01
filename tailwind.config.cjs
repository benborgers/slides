import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gray: colors.slate,
      },
      fontFamily: {
        serif: ["Garamond Condensed", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
