import "./NavBar.css";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Domů</NavLink>
        <NavLink to="all-movies">Filmy</NavLink>
        <NavLink to="form">Přidání filmů</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
