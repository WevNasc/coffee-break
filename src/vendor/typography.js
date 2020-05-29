import Typography from "typography"

const typography = new Typography({
  baseFontSize: '10px',
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Raleway',
      styles: [
        '400',
        '400i',
        '500',
        '500i',
        '600',
        '600i',
        '700',
        '700i',
      ],
    },
  ],
  bodyColor: "#666666",
  headerFontFamily: ['Work Sans', 'sans-serif'],
  bodyFontFamily: ['Work Sans', 'serif'],
})

export const { scale, rhythm, options } = typography
export default typography