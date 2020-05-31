const base = {
  fontSize: [
    "1em",
    "1.8em",
    "2.4em",
    "3.2em",
    "3.6em",
  ],
  titleFontFamily : "Roboto, sans-serif",
  textFontFamily : "Comfortaa, sans-serif"
}

const light = {
  primary: {
    color: "#5B22FF",
    primaryFont: "#f9f9f9",
    secondaryFont: "#f7f7f7"
  },
  secondary: {
    color: "#f9f9f9",
    primaryFont: "#333333",
    secondaryFont: "#666666"
  }
}

export const lightTheme = {...base, ...light}
