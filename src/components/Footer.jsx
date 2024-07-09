import { Link} from "react-router-dom";

const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-items">
            <Link to = '/contact' > 
                Contact Us
            </Link>


            <Link to="/about">
                About Us
            </Link>
        </div>
    </footer>
    )

}

export default Footer

