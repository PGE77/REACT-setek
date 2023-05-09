import { useRef, useState } from "react";

const App = () => {
  const refInput = useRef(null);
  const refHeading = useRef(null);
  const refLink = useRef(null);
  // const [useLink, setUseLink] = useState("http://google.com");
  const formSubmit = (event) => {
    event.preventDefault();

    // console.log(refInput.current.style.backgroundColor = "red")
    // console.log(refInput.current)
    // console.log(refHeading.current.style.color = "orange")
    // console.log(refHeading.current.textContent = "Další nadpis");
    // console.log(refLink.current.textContent = "Seznam.cz")
    // console.log(refLink.current.href = "http://seznam.cz")

    // if (useLink === "http://google.com") {
    //   setUseLink("http://seznam.cz");
    // } else {
    //   setUseLink("http://google.com");
    // }

    if (refLink.current.href === "http://google.com") {
      refLink.current.href = "http://seznam.cz"
    } else {
      refLink.current.href = "http://google.com"
    }





  };

  return (
    <div>
      <h1 ref={refHeading}>Formulář</h1>
      <form onSubmit={formSubmit}>
        <input type="text" ref={refInput} />
        <br />
        <input type="submit" value="Odeslat" />
      </form>
      <a href="http://google.com" ref={refLink}>
        Google
      </a>
    </div>
  );
};

export default App;
