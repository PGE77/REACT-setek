import { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [ test , setTest ] = useState(0)
  useEffect(() => {
    const button = document.querySelector(".btn")
   if (value >= 1) {
      button.textContent = `Klik číslo ${value}`
    } else {
      button.texTcontent = "Klikni"
    }
    console.log("První useffect")
  },[value])
  useEffect(() => {
    console.log("Druhý useffect")
    document.title = `Nový titulek ${test}`
 
  }, [test])

  return (
    <div>
      <h1>Začínáme</h1>
      <p>{value}</p>

      <button className="btn" onClick={() => setValue(value + 1)}>
        klikni
      </button>
      <button classNAme="btn-test" onClick={() => setTest(test + 1)}>titulek</button>
    </div>
  );
};

export default App;
