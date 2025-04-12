import { Box, Stack, Typography } from '@mui/material';

import { CodeBlock, StepTitle } from '~/components';

export const ViteSetupStep = () => {
  return (
    <Stack spacing={2}>
      <Box>
        <StepTitle>1. Create new vite app</StepTitle>
        <CodeBlock>npm create vite@latest</CodeBlock>
      </Box>

      <Box>
        <StepTitle>2. Set up import path</StepTitle>
        <CodeBlock multiline>
          {`
  // vite.config.ts
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  });
  `}
        </CodeBlock>
      </Box>

      <Box>
        <Typography variant="body2">* If using Typescript:</Typography>
      </Box>

      <Box>
        <StepTitle>3. Install required types</StepTitle>
        <CodeBlock>npm install --save-dev @types/node</CodeBlock>
      </Box>

      <Box>
        <StepTitle>4. In tsconfig, add to top of compiler options</StepTitle>
        <CodeBlock>
          {`
  "baseUrl": ".",
  "paths": {
    "~/*": ["./src/*"]
    },
  "typeRoots": ["./src/types"],
          `}
        </CodeBlock>
      </Box>
    </Stack>
  );
};
