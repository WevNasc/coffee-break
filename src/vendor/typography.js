import Typography from "typography"

const typography = new Typography({
  baseFontSize: '10px',
  googleFonts: [
    {
      name: 'Poppins',
      styles: [
        '100',
        '100i',
        '200',
        '200i',
        '300',
        '300i',
        '400',
        '400i',
        '500',
        '500i',
        '700',
        '700i',
      ],
    },
  ],
  blockMarginBottom: 0,
  headerFontFamily: ['Poppins', 'sans-serif'],
  bodyFontFamily: ['Poppins', 'sans-serif'],
})

export const { scale, rhythm, options } = typography
export default typography