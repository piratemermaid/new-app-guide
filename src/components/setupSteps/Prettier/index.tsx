import { Box, Stack, Typography } from "@mui/material";

import { CodeBlock } from "~/components/CodeBlock";

export const PrettierSetupStep = () => {
  return (
    <Stack spacing={2}>
      <Box>
        <Typography>1. Install Prettier</Typography>
        <CodeBlock>{`npm i --save-dev prettier TODO check this`}</CodeBlock>
      </Box>
      <Box>
        <Typography>2. Create prettier config in project root</Typography>
        <CodeBlock>touch .prettierrc</CodeBlock>
        <Typography>Recommended rules:</Typography>
        <CodeBlock multiline>
          {`
  {
    "semi": true,
    "singleQuote": true,
    "jsxSingleQuote": false,
    "trailingComma": "es5",
    "tabWidth": 2,
    "useTabs": false,
    "arrowParens": "always",
    "endOfLine": "lf",
    "printWidth": 80,
    "bracketSpacing": true,
    "jsxBracketSameLine": false,
    "proseWrap": "preserve"
  }
    `}
        </CodeBlock>
      </Box>
      <Box>
        <Typography>3. Ignore node modules</Typography>
        <CodeBlock> touch .prettierignore</CodeBlock>
        <CodeBlock>
          {`
  //.prettierignore
  */node_modules/*
  `}
        </CodeBlock>
      </Box>
      <Stack spacing={1}>
        <Typography>
          4. Format all files (prevents formatting in code diffs)
        </Typography>
        <Typography>Add script to package.json:</Typography>
        <CodeBlock>
          {`"format-all": "prettier --write \"./**/*.{js,jsx,ts,tsx,json,css}\""`}
        </CodeBlock>
      </Stack>
    </Stack>
  );
};
