import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="main-link-container">
        <NavLink to={"/"}>
          <b>Pokedex</b>
        </NavLink>
      </div>
      <div className="links-container">
        <NavLink to={"/"}>
          <b>Home</b>
        </NavLink>
        <NavLink>
          <b>Generation</b>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
