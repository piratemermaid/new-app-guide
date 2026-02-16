import { Box, Stack, Typography } from '@mui/material';
import { CodeBlock } from '~/components/CodeBlock';
import { StepTitle } from '~/components/StepTitle';

export const PrismaSetupStep = () => {
  return (
    <Stack spacing={2}>
      <Box>
        <StepTitle>1. Install Prisma</StepTitle>
        <Typography>
          Install the Prisma CLI as a dev dependency and the Prisma Client as a
          runtime dependency (
          <a
            href="https://www.prisma.io/docs/getting-started"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs
          </a>
          ).
        </Typography>
        <CodeBlock>npm install prisma --save-dev</CodeBlock>
        <CodeBlock>npm install @prisma/client</CodeBlock>
      </Box>

      <Box>
        <StepTitle>2. Initialize Prisma</StepTitle>
        <Typography>Creates the prisma folder and schema file.</Typography>
        <CodeBlock>npx prisma init</CodeBlock>
      </Box>

      <Box>
        <StepTitle>3. Configure the datasource</StepTitle>
        <Typography>
          Edit <code>prisma/schema.prisma</code> and set your database URL. For
          SQLite (simple, file-based):
        </Typography>
        <CodeBlock multiline>
          {`// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}`}
        </CodeBlock>
        <Typography>
          Add to <code>.env</code> (create it in the project root if needed):
        </Typography>
        <CodeBlock>DATABASE_URL="file:./dev.db"</CodeBlock>
        <Typography variant="body2">
          For PostgreSQL or MySQL, change <code>provider</code> and use a
          connection string in <code>DATABASE_URL</code>.
        </Typography>
      </Box>

      <Box>
        <StepTitle>4. Define the User model</StepTitle>
        <Typography>Add a simple users table to <code>prisma/schema.prisma</code>:</Typography>
        <CodeBlock multiline>
          {`model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
}`}
        </CodeBlock>
      </Box>

      <Box>
        <StepTitle>5. Create and run the migration</StepTitle>
        <CodeBlock>npx prisma migrate dev --name init</CodeBlock>
        <Typography variant="body2">
          This creates the migration and applies it. For production, use{' '}
          <code>prisma migrate deploy</code>.
        </Typography>
      </Box>

      <Box>
        <StepTitle>6. Generate the Prisma Client</StepTitle>
        <Typography>
          Run after any schema change. <code>prisma migrate dev</code> runs this
          automatically; otherwise run:
        </Typography>
        <CodeBlock>npx prisma generate</CodeBlock>
      </Box>

      <Box>
        <StepTitle>7. Use the client in code</StepTitle>
        <Typography>Example: create and read users (e.g. in a Fastify route or script):</Typography>
        <CodeBlock multiline>
          {`const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a user
const user = await prisma.user.create({
  data: {
    email: 'alice@example.com',
    name: 'Alice',
  },
});

// Find all users
const users = await prisma.user.findMany();`}
        </CodeBlock>
        <Typography variant="body2">
          Use <code>prisma.$disconnect()</code> when shutting down the app.
        </Typography>
      </Box>
    </Stack>
  );
};
