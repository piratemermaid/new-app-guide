import {
  ESLintSetupStep,
  HuskySetupStep,
  MUISetupStep,
  PrettierSetupStep,
  ReactQuerySetupStep,
  StorybookSetupStep,
  TanstackRouterSetupStep,
  VercelSetupStep,
  ViteSetupStep,
  ZustandSetupStep,
} from '~/components/setupSteps';

export const STEPS: {
  ui: Step[];
  server: Step[];
  db: Step[];
} = {
  ui: [
    {
      name: 'Vite',
      docsUrl: 'TODO',
      Component: ViteSetupStep,
      lastUpdated: '3/21/2025',
    },
    {
      name: 'Prettier',
      docsUrl: 'TODO',
      Component: PrettierSetupStep,
      lastUpdated: '3/21/2025',
    },
    {
      name: 'Material UI',
      docsUrl: 'https://mui.com/material-ui/getting-started/installation/',
      Component: MUISetupStep,
      lastUpdated: '3/21/2025',
    },
    {
      name: 'Tanstack Router',
      docsUrl: 'TODO',
      Component: TanstackRouterSetupStep,
      lastUpdated: '3/21/2025',
    },
    {
      name: 'Zustand',
      docsUrl: 'https://zustand-demo.pmnd.rs/',
      Component: ZustandSetupStep,
      lastUpdated: '3/21/2025',
    },
    {
      name: 'React Query',
      docsUrl:
        'https://tanstack.com/query/latest/docs/framework/react/installation',
      Component: ReactQuerySetupStep,
      lastUpdated: '3/21/2025',
    },
    {
      name: 'ESLint',
      docsUrl: 'TODO',
      Component: ESLintSetupStep,
      lastUpdated: '3/21/2025',
    },
    {
      name: 'Husky',
      docsUrl: 'TODO',
      Component: HuskySetupStep,
      lastUpdated: '3/21/2025',
    },
    {
      name: 'Vercel',
      docsUrl: 'TODO',
      Component: VercelSetupStep,
      lastUpdated: '3/21/2025',
    },
    {
      name: 'Storybook',
      docsUrl: 'TODO',
      Component: StorybookSetupStep,
      lastUpdated: '3/21/2025',
    },
  ],
  server: [],
  db: [],
};
