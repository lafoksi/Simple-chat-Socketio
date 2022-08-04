module.exports = {
  purge: ["./src/pages/**/*.ts", "./src/components/**/*.ts"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
