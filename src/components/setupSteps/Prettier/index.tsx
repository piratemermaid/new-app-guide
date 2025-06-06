import { Box, Stack, Typography } from '@mui/material';

import { CodeBlock, StepTitle } from '~/components';

export const PrettierSetupStep = () => {
  return (
    <Stack spacing={2}>
      <Box>
        <StepTitle>1. Install Prettier</StepTitle>
        <CodeBlock>{`npm i --save-dev prettier`}</CodeBlock>
      </Box>

      <Box>
        <StepTitle>2. Create prettier config in project root</StepTitle>
        <CodeBlock>touch .prettierrc</CodeBlock>
        <Typography variant="body2">Recommended rules:</Typography>
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
        <StepTitle>3. Ignore node modules</StepTitle>
        <CodeBlock> touch .prettierignore</CodeBlock>
        <CodeBlock>
          {`
  //.prettierignore
  */node_modules/*
  `}
        </CodeBlock>
      </Box>

      <Stack spacing={1}>
        <StepTitle>
          4. Format all files (prevents formatting in code diffs)
        </StepTitle>
        <Typography variant="body2">Add script to package.json:</Typography>
        <CodeBlock>
          {`"format-all": "prettier --write \"./**/*.{js,jsx,ts,tsx,json,css}\""`}
        </CodeBlock>
        <CodeBlock>npm run format-all</CodeBlock>
      </Stack>
    </Stack>
  );
};
