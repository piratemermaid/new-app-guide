declare global {
  export interface Step {
    name: string;
    Component: (props: { step: Step }) => React.ReactNode;
    lastUpdated: string;
  }
}
