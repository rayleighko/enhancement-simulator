import colors from "tailwindcss/colors"

import { createTheme, darkScrollbar } from "~/libs/mui"

export const MuiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      light: colors.orange[300],
      main: colors.orange[500],
      dark: colors.orange[700],
      contrastText: "rgb(35, 47, 56)",
    },
    secondary: {
      light: colors.orange[300],
      main: colors.orange[500],
      dark: colors.orange[700],
      contrastText: "rgb(35, 47, 56)",
    },
    info: {
      light: colors.blue[300],
      main: colors.blue[500],
      dark: colors.blue[700],
      contrastText: "rgb(35, 47, 56)",
    },
    success: {
      light: colors.green[300],
      main: colors.green[500],
      dark: colors.green[700],
      contrastText: "rgb(35, 47, 56)",
    },
    warning: {
      light: colors.yellow[300],
      main: colors.yellow[500],
      dark: colors.yellow[700],
      contrastText: "rgb(35, 47, 56)",
    },
    error: {
      light: colors.red[300],
      main: colors.red[500],
      dark: colors.red[700],
      contrastText: "rgb(35, 47, 56)",
    },
    text: {
      primary: "rgb(35, 47, 56)",
      secondary: "rgb(92, 92, 92)",
    },
    background: {
      default: colors.gray[100],
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
      }),
    },
  },
})
