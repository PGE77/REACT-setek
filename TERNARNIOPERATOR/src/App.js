//Ternární operátor

const App = () => {
  const error = true
  
  return <div>
    
    {error ? <p>Chyba</p> : <div><h2>Obsah stránky</h2></div>}
    
    
    
    </div>;
};

export default App;
