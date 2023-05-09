import "./header.scss";
import iss_logo from "../../Images/International_Space_Station_white.svg.png";

const Header = () => (
    <div className="header">
        <h1>Sledování Mezinárodní vesmírné stanice</h1>
        <img src={iss_logo} alt="white iss stencil"></img>
    </div>
);

export default Header;
