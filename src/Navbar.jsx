import { Link } from "react-scroll";
//import { Link } from "react-router";
import "./style.css";
//import "./index.css";
import logo from "./assets/logo.png";
import { useEffect, useState } from "react";
import menu_icon from "./assets/menu-icon.png";


function Navbar() {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, [])


    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <nav className={`container ${sticky ? 'dark-nav' : ''}`}>

                <img src={logo} alt="" className="logo" />
                <ul className={menuOpen ? "show-mobile-menu" : "hide-mobile-menu"}
                    onClick={() => setMenuOpen(false)}
                >

                    <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
                    <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
                    <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
                    <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                    <li><Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
                    <li><Link to='contact' smooth={true} offset={-260} duration={500} className="btn ">Contact Us</Link>
                    </li>
                </ul>
                <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
            </nav>
        </>
    )
}
export default Navbar;