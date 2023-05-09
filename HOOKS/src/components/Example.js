import "./Example.css";
import { useState } from "react";

const Example = () => {
  console.log(useState());
  const [title, setTitle] = useState("Můj první title");
  const [buttonText, setButtonText] = useState(" Původní text tlačítka");

  const buttonHandler = () => {
    if (title == "Můj první title") {
      setTitle("Nový text v titlu");
    } else {
      setTitle("Můj první title");
    }
  };
  const deleteTitle = () => {
    setTitle("");
  };

  const textTlacitka = () => {
    setButtonText("Nový text tlačítka");
  };

  return (
    <div className="text-button-changer">
      <h1>{title}</h1>
      <button type="button" onClick={buttonHandler}>
        Změnit title
      </button>
      <button type="button" onClick={deleteTitle}>
        Smazat Title
      </button>
      <button type="button" onClick={textTlacitka}>
        {buttonText}
      </button>
    </div>
  );
};

export default Example;
