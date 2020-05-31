import Typography from "typography"

const typography = new Typography({
  baseFontSize: '10px',
  googleFonts: [
    {
      name: 'Comfortaa',
      styles: [
        '300',
        '300i',
        '500',
        '500i',
        '700',
        '700i',
      ],
    },
    {
      name: 'Robot',
      styles: [
        '300',
        '300i',
        '500',
        '500i',
        '700',
        '700i',
      ],
    },
  ],
  blockMarginBottom: 0
})

export const { scale, rhythm, options } = typography
export default typography