import { Box, Link, Stack, Typography } from '@mui/material';

import { CodeBlock, StepTitle } from '~/components';

export const MUISetupStep = () => {
  return (
    <Stack spacing={2}>
      <Box>
        <StepTitle>1. Install MUI</StepTitle>
        <CodeBlock>
          npm install @mui/material @emotion/react @emotion/styled
          @fontsource/roboto @mui/icons-material
        </CodeBlock>
      </Box>

      <Stack spacing={1}>
        <StepTitle>2. Add theme</StepTitle>
        <CodeBlock multiline>
          {`    //main.tsx
    <ThemeProvider theme={theme}>{appcomponents}</ThemeProvider>`}
        </CodeBlock>
        <Typography variant="body2">
          <Link
            href="https://mui.com/material-ui/customization/color/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Color documentation
          </Link>
        </Typography>

        <Typography variant="body2">Theme example:</Typography>
        <CodeBlock multiline>
          {`    //themeName.ts    
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
    });`}
        </CodeBlock>
      </Stack>

      <Stack spacing={1}>
        <StepTitle>3. Optional: Install desired font(s)</StepTitle>
        <Link
          href="https://fontsource.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fontsource
        </Link>
        <Typography variant="body2">Choose font(s), then install</Typography>
        <CodeBlock>npm install @fontsource/fontname</CodeBlock>
        <Typography variant="body2">
          Import and set fontFamily in theme
        </Typography>
        <CodeBlock>{`
  //themeName.ts
  import '@fontsource/fontname';
  ...........
  typography: {
    allVariants: {
      fontFamily: "'Font Name', sans-serif",
    },
  },
  ...........
        `}</CodeBlock>
      </Stack>

      <Box>
        <Typography variant="body2">
          4. For dark mode: add between ThemeProvider start and app components:
        </Typography>
        <CodeBlock>{`<CssBaseline enableColorScheme />`}</CodeBlock>
        <Typography variant="body2">Dark Mode Switch Example</Typography>
        <CodeBlock multiline>
          {`
    <Box sx={{ textAlign: 'right' }} onClick={toggleDarkMode}>
      <Switch inputProps={{ 'aria-label': 'Dark mode' }} checked={darkMode} />
        <FormLabel sx={{ '&:hover': { cursor: 'pointer' } }}>
          Dark Mode
        </FormLabel>
    </Box>
          `}
        </CodeBlock>
      </Box>
    </Stack>
  );
};
