import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div>
     <h1>404 <br/>
      Stránka nenalezena</h1> 
      <Link to="/">Domovská stránka</Link>
    </div>
  );
}

export default Error;
