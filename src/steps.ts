import { ViteSetupStep } from "./components/setupSteps/Vite";

export const STEPS: {
  ui: Step[];
  server: Step[];
  db: Step[];
} = {
  ui: [{ name: "Vite", Component: ViteSetupStep, lastUpdated: "3/21/2025" }],
  server: [],
  db: [],
};
