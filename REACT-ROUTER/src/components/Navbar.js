import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className={ ({isActive}) => isActive ? "activeLink" : "noActiveLink" }>Domů</NavLink><br />
      <NavLink to="/movies" className={ ({isActive}) => isActive ? "activeLink" : "noActiveLink" }>Filmy</NavLink><br/>
      <NavLink to="/serials" className={ ({isActive}) => isActive ? "activeLink" : "noActiveLink" }>Seriály </NavLink><br/>
      <NavLink to="/pagination" className={ ({isActive}) => isActive ? "activeLink" : "noActiveLink" }>Pagination </NavLink>
    </nav>
 
  
  );
};

export default Navbar;
