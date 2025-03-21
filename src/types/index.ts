declare global {
  export interface Step {
    name: string;
    docsUrl: string;
    Component: (props: { step: Step }) => React.ReactNode;
    lastUpdated: string;
  }
}
