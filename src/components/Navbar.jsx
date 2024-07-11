import Logo from "../assets/images/EO.png";
import profileIcon from "../assets/images/profile-icon.png";
import cartimage from "../assets/images/cartimage.png";
import cartnew from "../assets/images/cartnew.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <Link to="/">
          <img
            className="logo"
            src={Logo}
            alt="home icon"
            style={{ height: "50px", width: "auto" }}
          />
        </Link>

        <span> Ethical Origins </span>

        <section className="navsection">
          <Link to="/cart">
            {/* toDO: populate page & move styles to css file */}
            <img
              className="user"
              src={cartnew}
              alt="user profile"
              style={{ height: "30px", width: "auto" }}
            />
          </Link>
          {/* 
          <Link to="/userLogin">
            <img
              className="user"
              src={profileIcon || "swap-user-image"}
              alt="user profile"
              style={{ height: "30px", width: "auto" }}
            />
          </Link> */}
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
