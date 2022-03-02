import { NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-left">
          <div>
            <NavLink className="navbar-option" to="/">
              Home
            </NavLink>
          </div>

          <div>
            <NavLink className="navbar-option" to="/profile">
              Profile
            </NavLink>
          </div>
        </div>
        <div className="navbar-right"></div>
      </div>
    </div>
  );
};

export default Navbar;
