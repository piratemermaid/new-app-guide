type Props = {
  step: Step;
};

export const ViteSetupStep = ({ step }: Props) => {
  return (
    <div>
      <h3>Create Vite App</h3>

      <p>Last updated: {step.lastUpdated}</p>

      <p>1. Create new vite app</p>
      <code>npm create vite@latest</code>

      <p>2. Set up import path</p>
      <div>
        <code>
          <pre>
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
          </pre>
        </code>

        <p>3. If using typescript, install required types</p>
        <code>npm install --save-dev @types/node</code>
      </div>
    </div>
  );
};
