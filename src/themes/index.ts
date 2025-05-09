//@ts-expect-error - it's installed idk
import '@fontsource-variable/noto-sans';
import { createTheme, darken, lighten } from '@mui/material';
import { grey, pink, teal } from '@mui/material/colors';

const palette = {
  primary: teal[300],
  secondary: pink[200],
  background: grey[900],
  text: grey[50],
  disabled: grey[500],
};

export const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      //TODO: add custom tokens to palette type
      darkest: darken(palette.primary, 0.7),
      darker: darken(palette.primary, 0.4),
      dark: darken(palette.primary, 0.2),
      main: palette.primary,
      light: lighten(palette.primary, 0.2),
      lighter: lighten(palette.primary, 0.4),
      lightest: lighten(palette.primary, 0.6),
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
      fontSize: '3rem',
      color: palette.primary,
    },
    h2: {
      fontSize: '2rem',
      color: palette.secondary,
    },
  },
});
