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
    },
  },
});
