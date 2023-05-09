const App = () => {
  const value = "David";
  const value2 = 1;

  const result1 = value && value2;
  //console.log(result1);
  //První je true a druhé taky = se vrací druhá hodnota
  //První je false = vrací se první
  const result2 = value || 888;
  // console.log(result2)
  //První je true  = vrací první hodnota
  //První je false , tak vrací druhou hodnotu

  return <div>
    <h1>{value2 || "defaultní text"}</h1>
    {value2 && <h1>Super tajný nadpis</h1>}
  </div>;
};

export default App;
