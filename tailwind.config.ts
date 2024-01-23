import type { Config } from "tailwindcss";

export default <Partial<Config>> {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    fontFamily: {
      sans: [
        '"Manrope", sans-serif',
      ],
    },
  }
}