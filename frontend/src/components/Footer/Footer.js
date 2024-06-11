import Logo from '../../assets/Icons/Logo.png';
import Facebook from '../../assets/Icons/Facebook.png';
import Twitter from '../../assets/Icons/Twitter.png';
import Instagram from '../../assets/Icons/Instagram.png';
import LinkedIn from '../../assets/Icons/LinkedIn.png';

import './Footer.css';

export default function Footer() {
    return (
        <>
            <div className="containerFooter text-center py-4">
                <img src={Logo} className="footerLogo mb-3" alt="Logo" />
                <div>
                    <a href="/" className="d-inline-block mx-2">Home</a>
                    <a href="#about" className="d-inline-block mx-2">About</a>
                    <a href="#services" className="d-inline-block mx-2">Services</a>
                    <a href="#projects" className="d-inline-block mx-2">Projects</a>
                    <a href="#testimonials" className="d-inline-block mx-2">Testimonials</a>
                    <a href="#contact" className="d-inline-block mx-2">Contact Us</a>
                </div>
                <div className="d-flex align-items-center iconsFooter">
                    <a href="/"><img src={Facebook} alt="Facebook"/></a>
                    <a href="/"><img src={Twitter} alt="Twitter"/></a>
                    <a href="/"><img src={Instagram} alt="Instagram"/></a>
                    <a href="/"><img src={LinkedIn} alt="LinkedIn"/></a>
                </div>
            </div>
            <div className="bottomFooter d-flex justify-content-center align-items-center">
                <p className="bottomFooterText">
                    © {new Date().getFullYear()}
                    {' '}<span style={{fontWeight: "bold", color: "#FF6300"}}>Muhammad</span>{' '}
                    All Rights Reserved, Inc.
                </p>
            </div>
        </>
    )
}