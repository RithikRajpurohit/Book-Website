import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ...flowbite.content, // Spread the content array
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin, // Use the plugin as a function reference
  ],
};
