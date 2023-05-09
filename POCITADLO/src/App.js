import DecreaseButton from "./components/DecreaseButton";
import IncreaseButton from "./components/IncreaseButton";
import ResetButton from "./components/ResetButton";
import { useState } from "react";

const App = () => {
  const [valueDown, setValueDown] = useState(0);
  const snizit = () => {
    const result = valueDown - 1;
    setValueDown(result);
  };

  const zvysit = () => {
    const result = valueDown + 1;
    setValueDown(result);
  };

  const reset = () => {
    const result = 0;
    setValueDown(result);
  };

  return (
    <div className="counter">
      <h1>Počítadlo</h1>
      <h2>{valueDown}</h2>
      <DecreaseButton decrease={snizit}></DecreaseButton>
      <IncreaseButton increase={zvysit}></IncreaseButton>
      <ResetButton reset={reset}></ResetButton>
    </div>
  );
};

export default App;
