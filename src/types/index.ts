declare global {
  interface Step {
    name: UIStepName | BEStepName | DBStepName;
    docsUrl: string;
    Component: (props: { step: Step }) => React.ReactNode;
    lastUpdated: string;
  }

  type Stack = 'ui' | 'be' | 'db';

  type UIStepName =
    | 'eslint'
    | 'husky'
    | 'mui'
    | 'prettier'
    | 'react-query'
    | 'storybook'
    | 'tanstack-router'
    | 'vercel'
    | 'vite'
    | 'zustand';

  type BEStepName = string;

  type DBStepName = string;

  type StepName = UIStepName | BEStepName | DBStepName;
}
