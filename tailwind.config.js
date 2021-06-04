module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('./img/hero.jpeg')",
        ymir: "url('./img/ymir.jpeg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
