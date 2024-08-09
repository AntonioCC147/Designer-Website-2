import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import Logo from '../../assets/Icons/Logo.png'

import './Navbar.css';

export default function NavbarComponent() {
    return (
        <Navbar sticky="top" expand="xxl" className="navbarComponent">
            <Container>
                <Navbar.Brand href="/"><img src={Logo} className="logo" alt="Logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto" >
                    <Nav.Link href="/" className="navbarText">Home</Nav.Link>
                    <Nav.Link href="#about" className="navbarText">About</Nav.Link>
                    <Nav.Link href="#services" className="navbarText">Services</Nav.Link>
                    <Nav.Link href="#projects" className="navbarText">Projects</Nav.Link>
                    <Nav.Link href="#testimonials" className="navbarText">Testimonials</Nav.Link>
                    <Nav.Link href="#contact" className="navbarText">Contact Us</Nav.Link>
                    <div className="d-flex justify-content-center align-items-center">
                    <Button className="navbarButton">Download CV</Button>
                    </div>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}