module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        flip: "transform-style, transform, backface-visibility",
      },
      transitionDuration: {
        flip: "900ms",
      },
      transitionTimingFunction: {
        flip: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};
