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
        <CodeBlock>
          {`<ThemeProvider theme={theme}>{appcomponents}</ThemeProvider>`}
        </CodeBlock>
        <p>
          Color documentation:{" "}
          <a>https://mui.com/material-ui/customization/color/ </a>
        </p>
        Theme example:
        <CodeBlock multiline>
          {`
    //themeName.ts
    export const themeName = createTheme({
        mode: 'light',
        palette: {
            primary: {
                main: '#7dc599',
            },
            secondary: {
                main: '#dfaf86',
                },
            action: {
                disabled: '#a8a8a7',
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
