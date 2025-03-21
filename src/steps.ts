import {
  MUISetupStep,
  PrettierSetupStep,
  ViteSetupStep,
} from "~/components/setupSteps";

export const STEPS: {
  ui: Step[];
  server: Step[];
  db: Step[];
} = {
  ui: [
    {
      name: "Vite",
      docsUrl: "TODO",
      Component: ViteSetupStep,
      lastUpdated: "3/21/2025",
    },
    {
      name: "Prettier",
      docsUrl: "TODO",
      Component: PrettierSetupStep,
      lastUpdated: "3/21/2025",
    },
    {
      name: "Material UI",
      docsUrl: "https://mui.com/material-ui/getting-started/installation/",
      Component: MUISetupStep,
      lastUpdated: "3/21/2025",
    },
  ],
  server: [],
  db: [],
};
