import { Box, Stack, Typography } from '@mui/material';
import { CodeBlock } from '~/components/CodeBlock';
import { StepTitle } from '~/components/StepTitle';

export const HuskySetupStep = () => {
  return (
    <Stack spacing={2}>
      <Box>
        <StepTitle>1. Install Husky</StepTitle>
        <CodeBlock>{`npm install --save-dev husky`}</CodeBlock>
      </Box>

      <Box>
        <StepTitle>2. Initialize</StepTitle>
        <CodeBlock>{`npx husky init`}</CodeBlock>
      </Box>

      <Stack spacing={1}>
        <StepTitle>3. Add pre-commit hook</StepTitle>
        <Box>
          <Typography>File: .husky/pre-commit</Typography>
        </Box>
        <Box>
          <Typography>Just FE:</Typography>
          <CodeBlock>{`npm run lint`}</CodeBlock>
        </Box>
        <Box>
          <Typography>Using client & server folders:</Typography>
          <CodeBlock>{`npm --prefix client run lint`}</CodeBlock>
        </Box>
      </Stack>
    </Stack>
  );
};
