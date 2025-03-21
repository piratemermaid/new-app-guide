import { CodeBlock } from "~/components/CodeBlock";

type Props = {
  step: Step;
};

export const ViteSetupStep = ({ step }: Props) => {
  return (
    <div>
      <h3>Create Vite App</h3>
      <p>Last updated: {step.lastUpdated}</p>
      <div>
        <p>1. Create new vite app</p>
        <CodeBlock>npm create vite@latest</CodeBlock>
      </div>
      <div>
        <p>2. Set up import path</p>
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
      </div>
      <p>* If using Typescript:</p>
      <div>
        <p>3. Install required types</p>
        <CodeBlock>npm install --save-dev @types/node</CodeBlock>
      </div>
      <div>
        <p>4. In tsconfig, add to top of compiler options</p>
        <CodeBlock>
          {`
  "baseUrl": ".",
  "paths": {
    "~/*": ["./src/*"]
    },
    "typeRoots": ["./src/types"],
    `}
        </CodeBlock>
      </div>
    </div>
  );
};
