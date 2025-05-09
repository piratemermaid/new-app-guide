import { Box, Stack, Typography } from '@mui/material';
import { CodeBlock } from '~/components/CodeBlock';
import { StepTitle } from '~/components/StepTitle';

export const VercelSetupStep = () => {
  return (
    <Stack spacing={2}>
      <Box>
        <StepTitle>1. Set up repo with Vercel</StepTitle>
        <Typography>
          Assumes prior knowledge of Vercel. See document for more details.
        </Typography>
      </Box>

      <Box>
        <StepTitle>2. Configure SPA routing</StepTitle>
        <Typography>
          Required for routes other than root to work with Vite and Vercel. (
          {
            <a
              href="https://vercel.com/docs/frameworks/vite#using-vite-to-make-spas"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>
          }
          )
        </Typography>
        <CodeBlock>{`touch vercel.json`}</CodeBlock>
        <CodeBlock>{`{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}`}</CodeBlock>
      </Box>
    </Stack>
  );
};
