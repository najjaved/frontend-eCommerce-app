import placeHolderLogo from "../assets/placeholder.logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Link to="/">
      <nav
        style={{
          background: "cornflowerblue",
          textAlign: "center",
          padding: "10px 40px",
        }}
      >
        <img
          src={placeHolderLogo}
          alt="home icon"
          style={{ height: "30px", width: "auto" }}
        />
      </nav>
    </Link>
  );
}

export default Navbar;
