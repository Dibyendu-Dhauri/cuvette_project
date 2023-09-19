

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgreen: "#8cc461",
        gray: {
          "100": "#252525",
          "200": "rgba(0, 0, 0, 0.64)",
        },
        white: "#fff",
        red: "#ff0000",
        darkslategray: "#004429",
        gold: "#ffd600",
        dimgray: "#656565",
        gainsboro: "rgba(217, 217, 217, 0)",
        darkslateblue: "rgba(28, 48, 120, 0)",
      },
      spacing: {},
      fontFamily: {
        dangrek: "Dangrek",
        roboto: "Roboto",
      },
      borderRadius: {
        smi: "13px",
        "4xs": "9px",
      },
    },
    fontSize: {
      smi: "0.81rem",
      "49xl": "4.25rem",
      mid: "1.06rem",
      "21xl": "2.5rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};


