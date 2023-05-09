import { useState, useEffect } from "react";

const App = () => {
  const [quote, setQuote] = useState("Výchozí text");

  const url = "https://api.kanye.rest/";



  const getQuote = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const finalQuote = data["quote"];
    setQuote(finalQuote);
  }

  useEffect (() => {
    getQuote();
  }, [])
 

  return <h1>{quote}</h1>;
};

export default App;
