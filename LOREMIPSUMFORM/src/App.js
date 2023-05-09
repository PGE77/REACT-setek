import React from "react";
import data from "./data";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    let amount = parseInt(count);

    if (amount < 0) {
      amount = 1;
    } else if (amount > 80) 
    {
      amount = 80;
    }

    setText(data.slice(0, amount));
    

    // const resultParagraphs = data.filter( (oneParagraph, index) => {
    //       return index < amount
    // })
    // setText(resultParagraphs)

  };

  return (
    <div className="lorem-ipsum">
      <form onSubmit={submitHandler}>
        <h1>Lorem ipsum generátor</h1>
        <label>Odstavec:</label>
        <input
          type="number"
          name="dataText"
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <input type="submit" />
      </form>

      {text.map((oneText, index) => {
        return (
          <div key={index} className="text">
            {oneText}
          </div>
        );
      })}
    </div>
  );
};

export default App;
