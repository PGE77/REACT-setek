import "./Navbar.css";
import logo from "../images/netflix.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import links from "../data";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav>
      <div className="navigation">
        <div className="nav-header">
          <img src={logo} alt="" />
       
            <button
              className={` ${showMenu ? " absol hide-i" : "absol show-i"}`}
              onClick={() => setShowMenu(true)}
            >
              <GiHamburgerMenu className="hamburger-icon" />
            </button>
            <button
              className={` ${showMenu ? "show-i" : "hide-i"}`}
              onClick={() => setShowMenu(false)}
            >
              <ImCross className="hamburger-icon" />
            </button>
          
        </div>
        <div className={` ${showMenu ? "nav-list show" : "nav-list hide"}`}>
          <ul>
            {links.map((oneLink) => {
              const { id, text, url } = oneLink;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
