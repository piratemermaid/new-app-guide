import { STEPS } from "./steps";

function App() {
  return (
    <>
      <h1>UI</h1>
      {STEPS.ui.map((step, index) => {
        return (
          <div key={step.name} className="step">
            <hr />
            <h2>{step.name}</h2>
            <step.Component key={index} step={step} />
          </div>
        );
      })}
    </>
  );
}

export default App;
