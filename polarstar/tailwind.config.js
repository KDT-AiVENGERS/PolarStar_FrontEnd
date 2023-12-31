/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "make-cell": "make-cell 0.4s linear",
        "fade-in": "fade-in 0.4s linear",
        "fade-in-delay": "fade-in-delay 0.2s linear",
        "fade-in-full": "fade-in-full 0.2s linear",
      },
      keyframes: {
        "make-cell": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 0.3 },
        },
        "fade-in-delay": {
          "0%": { opacity: 0 },
          "50%": { opacity: 0 },
          "100%": { opacity: 0.3 },
        },
        "fade-in-full": {
          "0%": { opacity: 0 },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
      },
      height: {
        200: "50rem",
      },
      spacing: {
        "4/5": "80%",
        "3/5": "60%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-page": 'url("/images/onboarding/mainPageUpscaled.png")',
      },
      colors: {
        "space-black": "#0E1821",
        "space-dark-blue": "#091841",
        "space-blue": "#3757D0",
        "space-light-blue": "#90ABD0",
        "space-dark-yellow": "#F7D64D",
        "space-yellow": "#FAEC82",
        "space-light-yellow": "#FDFBAA",
        "space-green": "#9BB355",
        "space-light-red": "#E0635A",
        "space-red": "#E24F4C",
        "space-magenta": "#C24061",
        "space-lightpurple": "#C8D1FC",
        "main-background-color": "#010717",
      },
      fontFamily: {
        Pretendard: ["Pretendard"],
        HakgyoansimWoojuR: ["HakgyoansimWoojuR"],
        SpoqaHanSansNeo: ["Spoqa Han Sans Neo"],
        OmyuPretty: ["omyu_pretty"],
      },
    },
  },
  plugins: [],
};
