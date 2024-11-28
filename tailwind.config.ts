import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-blue": "#020617",
        "light-gray": "#505050",
      },
      backgroundImage: {
        "hero-image": "url('/Hero_section.png')",
        "white-blue-shades":
          "linear-gradient(126.13deg, #FFFFFF 14.38%, rgba(226, 242, 255, 0.86) 74.7%, #ECF7FF 100.68%)",
        "gradient-blue":
          "linear-gradient(260.95deg, rgba(255, 255, 255, 0) 9.2%, #3661FF 122.1%);",
        "gradient-whitish-gray":
          "linear-gradient(178deg, rgba(201, 234, 252, 0.51) 14.9%, rgba(139, 192, 216, 0.73) 80%);",
        "gradient-white-shades":
          "linear-gradient(260.95deg, rgba(255, 255, 255, 0) 4.29%, #EBF4FF 95.46%, #C9E2FF 95.46%);",
        "gradient-light-blue":
          "linear-gradient(180deg, #869FFB 0%, rgba(54, 97, 255, 0.44) 100%, #3661FF 100%);",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "sequel-sans": ['"Sequel Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
