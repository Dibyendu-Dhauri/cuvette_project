// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueviolet: {
          "100": "#9747ff",
          "200": "#6244fa",
        },
        gray: {
          "100": "#feffff",
          "200": "rgba(0, 0, 0, 0.2)",
        },
        white: "#fff",
        indigo: "#620594",
        cornflowerblue: "#5e90e6",
        orchid: "#cf56bd",
        salmon: "#ea7167",
        darkorchid: "#6328c0",
        darkgray: "#aeb5bd",
        
        silver: "#adb6bf",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "0.88rem",
      smi: "0.81rem",
      "7xl": "1.63rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};


