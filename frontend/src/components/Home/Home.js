import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Avatar from '../../assets/Images/Avatar.png';
import Facebook from '../../assets/Icons/Facebook.png';
import Twitter from '../../assets/Icons/Twitter.png';
import Instagram from '../../assets/Icons/Instagram.png';
import LinkedIn from '../../assets/Icons/LinkedIn.png';

import './Home.css';

export default function Home() {
    return (
        <div className="containerHome">
            <Row>
                <Col lg={6}>
                    <p className="homeText1">Hi I am</p>
                    <p className="homeText2">Muhammad Bin Jameel</p>
                    <p className="homeText3">UI & UX</p>
                    <p className="homeText32" style={{color: "#FF6300"}}>Designer</p>
                    <p className="homeText4">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus</p>
                    <div className="centerHomeButton">
                        <Button className="homeButton">Hire Me</Button>
                    </div>
                </Col>
                <Col lg={6} className="avatarImageContainer d-flex flex-column align-items-center justify-content-center">
                    <img src={Avatar} className="avatarImage mb-3" alt="Avatar"/>
                    <div className="d-flex align-items-center iconsContainer">
                        <a href="/"><img src={Facebook} alt="Facebook"/></a>
                        <a href="/"><img src={Twitter} alt="Twitter"/></a>
                        <a href="/"><img src={Instagram} alt="Instagram"/></a>
                        <a href="/"><img src={LinkedIn} alt="LinkedIn"/></a>
                    </div>
                </Col>
            </Row>
        </div>
    )
}