//@ts-ignore - it's installed idk
import "@fontsource-variable/noto-sans";
import { createTheme } from "@mui/material";
import { deepOrange, grey, teal } from "@mui/material/colors";

const palette = {
  primary: teal[500],
  secondary: deepOrange[500],
  background: grey[900],
  text: grey[50],
  disabled: grey[500],
};

export const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: palette.primary,
    },
    secondary: {
      main: palette.secondary,
    },
    background: {
      default: palette.background,
    },
    action: {
      disabled: palette.disabled,
    },
  },
  typography: {
    allVariants: {
      color: palette.text,
      fontFamily: "'Noto Sans Variable', sans-serif",
    },
    h1: {
      fontSize: "3rem",
      color: palette.primary,
    },
    h2: {
      fontSize: "2rem",
      color: palette.secondary,
    },
  },
});
