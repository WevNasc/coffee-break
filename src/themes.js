const base = {
  fontSize: [
    "1em",
    "1.8em",
    "2.4em",
    "3.2em",
    "3.6em",
  ],
  titleFontFamily : "Poppins, sans-serif",
  textFontFamily : "Poppins, sans-serif"
}

const light = { 
  primary: {
    background: "#ffffff",
    primaryFont: "#282524",
    secondaryFont: "#f9f9f9"
  },
  secondary: {
    background: "#333333",
    primaryFont: "#f9f9f9",
    secondaryFont: "#f9f9f9"
  }
}

export const lightTheme = {...base, ...light}
