import { CodeBlock } from "~/components/CodeBlock";

type Props = {
  step: Step;
};

export const ViteSetupStep = ({ step }: Props) => {
  return (
    <div>
      <h3>Create Vite App</h3>

      <p>Last updated: {step.lastUpdated}</p>

      <p>1. Create new vite app</p>
      <CodeBlock>npm create vite@latest</CodeBlock>

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

      <p>3. TS - install required types</p>
      <CodeBlock>npm install --save-dev @types/node</CodeBlock>

      <p>4. TS - in tsconfig, add to top of compiler options</p>
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
  );
};
