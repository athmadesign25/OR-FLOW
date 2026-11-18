/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clinical: {
          blue: "#1A73E8",
          blueDark: "#1557B0",
          blueLight: "#E8F0FE",
          emergency: "#DC2626",
          urgent: "#F59E0B",
          elective: "#10B981",
          scheduled: "#7C4DFF",
          ongoing: "#D97706",
          cancelled: "#E53935",
          deferred: "#64748B",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}

