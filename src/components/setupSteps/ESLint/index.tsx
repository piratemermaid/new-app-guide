import { Box, Stack, Typography } from '@mui/material';

import { CodeBlock, ExampleTitle, StepTitle } from '~/components';

export const ESLintSetupStep = () => {
  return (
    <Stack spacing={2}>
      <Box>
        <StepTitle>1. Install and configure</StepTitle>
        <CodeBlock>npm install --save-dev eslint @eslint/js</CodeBlock>
        <Typography variant="body2">To configure:</Typography>
        <CodeBlock>npx eslint --init</CodeBlock>
        <Typography variant="body2">To run:</Typography>
        <CodeBlock>npx eslint yourfile.js</CodeBlock>
        <ExampleTitle>Example: Adding rules/settings</ExampleTitle>
        <CodeBlock>{`
  export default [
    ...initialConfig,
    {
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
    {
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
  ];
  `}</CodeBlock>
      </Box>
    </Stack>
  );
};
