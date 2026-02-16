import { Box, Stack, Typography } from '@mui/material';
import { CodeBlock } from '~/components/CodeBlock';
import { StepTitle } from '~/components/StepTitle';

export const NodeFastifySetupStep = () => {
  return (
    <Stack spacing={2}>
      <Box>
        <StepTitle>1. Create a Node project</StepTitle>
        <Typography>
          If starting from scratch, initialize a new project. Ensure Node.js is
          installed (
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            nodejs.org
          </a>
          ).
        </Typography>
        <CodeBlock>npm init -y</CodeBlock>
      </Box>

      <Box>
        <StepTitle>2. Install Fastify</StepTitle>
        <CodeBlock>npm install fastify</CodeBlock>
      </Box>

      <Box>
        <StepTitle>3. Create the server file</StepTitle>
        <Typography>Create a minimal Fastify server (e.g. src/server.js or server.js):</Typography>
        <CodeBlock multiline>
          {`// server.js (or src/server.js)
const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();`}
        </CodeBlock>
      </Box>

      <Box>
        <StepTitle>4. Add scripts to package.json</StepTitle>
        <CodeBlock multiline>
          {`"scripts": {
  "start": "node server.js",
  "dev": "node --watch server.js"
}`}
        </CodeBlock>
        <Typography variant="body2">
          Use <code>--watch</code> for development auto-reload (Node 18+). For
          TypeScript, use <code>tsx</code> or <code>ts-node</code> and point to
          your .ts file.
        </Typography>
      </Box>

      <Box>
        <StepTitle>5. Run the server</StepTitle>
        <CodeBlock>npm run dev</CodeBlock>
        <Typography>
          Open{' '}
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://localhost:3000
          </a>{' '}
          to see the response.
        </Typography>
      </Box>
    </Stack>
  );
};
