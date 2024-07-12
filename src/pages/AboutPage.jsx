import { Link } from "react-router-dom";
import "../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h3>About Page</h3>
      <p>
        {" "}
        This application is designed to help eCommerce admins to manage products
        and inventory in their stores, with a dashboard displaying list of
        products and options to add, edit or delete product(s).
      </p>
      <div>
        <h5>The team</h5>
        <p>
          <Link
            to="https://github.com/mariamagneu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Maria Magdalena</strong>
          </Link>
          : MA in Political Museums, took a turn into Web3 in 2021, junior
          webDev. Maria's strenghts lie in communication & problem solving
        </p>
        <p>
          <Link
            to="https://github.com/najjaved"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Najma Javed</strong>
          </Link>
          : Electrical Engineering, Masters, HiL Test Engineer, a travel
          enthusiast and a nature lover
        </p>
      </div>

      <div className="Lkdn-links">
        <p className="xx">
          <strong>LinkedIn:</strong>
          <Link
            to="https://www.linkedin.com/in/maria-magdalena-neu-85845b141/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maria,{" "}
          </Link>
          <Link
            to="https://de.linkedin.com/in/najaved"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Najma,{" "}
          </Link>
        </p>
      </div>

      {/* Back button */}
      <Link to="/">
        <button type="button"> Home </button>
      </Link>
    </div>
  );
};

export default AboutPage;
