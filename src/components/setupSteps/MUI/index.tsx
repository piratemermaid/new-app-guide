import { Box, Link, Stack, Typography } from "@mui/material";

import { CodeBlock } from "~/components/CodeBlock";

export const MUISetupStep = () => {
  return (
    <Stack spacing={2}>
      <Box>
        <Typography>1. Install MUI</Typography>
        <CodeBlock>
          npm install @mui/material @emotion/react @emotion/styled
          @fontsource/roboto @mui/icons-material
        </CodeBlock>
      </Box>

      <Stack spacing={1}>
        <Typography>2. Add theme</Typography>
        <CodeBlock multiline>
          {`    //main.tsx
    <ThemeProvider theme={theme}>{appcomponents}</ThemeProvider>`}
        </CodeBlock>
        <Typography>
          <Link
            href="https://mui.com/material-ui/customization/color/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Color documentation
          </Link>
        </Typography>

        <Typography>Theme example:</Typography>
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
        <Typography>3. Optional: Install desired font(s)</Typography>
        <Link
          href="https://fontsource.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fontsource
        </Link>
        <Typography>Choose font(s), then install</Typography>
        <CodeBlock>npm install @fontsource/fontname</CodeBlock>
        <Typography>Import and set fontFamily in theme</Typography>
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
        <Typography>
          4. For dark mode: add between ThemeProvider start and app components:
        </Typography>
        <CodeBlock>{`<CssBaseline enableColorScheme />`}</CodeBlock>
        <Typography>Dark Mode Switch Example</Typography>
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
