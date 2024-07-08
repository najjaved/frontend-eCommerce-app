import placeHolderLogo from "../assets/images/placeholder.logo.jpg";
import profileIcon from "../assets/images/profile-icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <Link to="/">
          <img
            className="logo"
            src={placeHolderLogo}
            alt="home icon"
            style={{ height: "30px", width: "auto" }}
          />
        </Link>

        <span> Ethical Origins </span>

        <Link to="/userLogin">
          {" "}
          {/* toDO: populate page & move styles to css file */}
          <img
            className="user"
            src={profileIcon || "swap-user-image"}
            alt="user profile"
            style={{ height: "30px", width: "auto" }}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
