import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function add() {
    setCount((prevCount) => prevCount + step);
  }

  function subtract() {
    setCount((prevCount) => prevCount - step);
  }

  function reset() {
    setCount(0);
  }

  function handleStepChange(event) {
    setStep(Number(event.target.value));
  }

  return (
    <div className="counter">
      <h1>Counter app</h1>
      <div className="counter-controls">
        <button className="counter--minus" onClick={subtract}>
          –
        </button>
        <div className="counter--count">
          <h1>{count}</h1>
        </div>
        <button className="counter--plus" onClick={add}>
          +
        </button>
      </div>
      <button className="counter--reset" onClick={reset}>
        Reset
      </button>
      <div className="step-control">
        <label htmlFor="step">Step:</label>
        <input
          type="number"
          id="step"
          value={step}
          onChange={handleStepChange}
        />
      </div>
    </div>
  );
}
