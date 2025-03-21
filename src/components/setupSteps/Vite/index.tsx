import { Box, Stack, Typography } from "@mui/material";

import { CodeBlock } from "~/components/CodeBlock";

export const ViteSetupStep = () => {
  return (
    <Stack spacing={2}>
      <Box>
        <Typography>1. Create new vite app</Typography>
        <CodeBlock>npm create vite@latest</CodeBlock>
      </Box>
      <Box>
        <Typography>2. Set up import path</Typography>
        <CodeBlock multiline>
          {`
  // vite.config.ts
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import path from 'path';

  // https://vitejs.dev/config/
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
        <Typography>* If using Typescript:</Typography>
      </Box>
      <Box>
        <Typography>3. Install required types</Typography>
        <CodeBlock>npm install --save-dev @types/node</CodeBlock>
      </Box>
      <Box>
        <Typography>4. In tsconfig, add to top of compiler options</Typography>
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
