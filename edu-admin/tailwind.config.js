/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "rgba(var(--background))",
        // black: "rgba(var(--black))",
        // white: "rgba(var(--white))",
        // blue: "rgba(var(--blue))",
        // success: "rgba(var(--success))",
        // danger: "rgba(var(--danger))",
        // warning: "rgba(var(--warning))",

        background: "rgba(var(--background))",
        black: "rgba(var(--black))",
        white: "rgba(var(--white))",
        blue: "rgba(var(--blue))",
        'primary-text': "rgba(var(--primary-text))",
        'sub-text': "rgba(var(--sub-text))",
        'lable-text': "rgba(var(--lable-text))",
        'caption-text': "rgba(var(--caption-text))",
        active: "rgba(var(--active))",
        success: "rgba(var(--success))",
        danger: "rgba(var(--danger))",
        warning: "rgba(var(--warning))",
      },
    },
  },
  plugins: [],
}

