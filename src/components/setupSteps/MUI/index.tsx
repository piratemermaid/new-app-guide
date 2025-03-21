import { CodeBlock } from "~/components/CodeBlock";

export const MUISetupStep = () => {
  return (
    <div>
      <div>
        <p>1. Install</p>
        <CodeBlock>
          npm install @mui/material @emotion/react @emotion/styled
          @fontsource/roboto @mui/icons-material
        </CodeBlock>
      </div>

      <div>
        <p>2. Add theme</p>
        <CodeBlock multiline>
          {`
    //main.tsx
    
    <ThemeProvider theme={theme}>{appcomponents}</ThemeProvider>
          `}
        </CodeBlock>
        <p>
          <a
            href="https://mui.com/material-ui/customization/color/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Color documentation
          </a>
        </p>
        Theme example:
        <CodeBlock multiline>
          {`
    //themeName.ts
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

          `}
        </CodeBlock>
      </div>
      <div>
        <p>
          3. For dark mode: add between ThemeProvider start and app components:
        </p>
        <CodeBlock>{`<CssBaseline enableColorScheme />`}</CodeBlock>
        <p>Dark Mode Switch Example</p>
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
      </div>
    </div>
  );
};
