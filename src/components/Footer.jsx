import { Link} from "react-router-dom";

const Footer = () => {
    return (
    <footer className="footer">
        <Link to = '/contact' > 
            Contact Us
        </Link>


        <Link to="/about">
            About Us
        </Link>
    </footer>
    )

}

export default Footer

