import { Link} from "react-router-dom";

const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-items">
            <Link to = '/contact' > 
            <img
                src=''
                alt='contact icon'
            /> 
                Contact Us
            </Link>

            <Link to="https://github.com/najjaved/frontend-eCommerce-app">
                 source code
            </Link>

            <Link to="/about">
                About Us
            </Link>
        </div>
    </footer>
    )

}

export default Footer

