import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Avatar from '../../assets/Images/Avatar.png';

import './Home.css';

export default function Home() {
    return (
        <div className="containerHome">
            <Row>
                <Col lg={6}>
                    <p className="homeText1">Hi I am</p>
                    <p className="homeText2">Muhammad Bin Jameel</p>
                    <p className="homeText3">UI & UX</p>
                    <p className="homeText32">Designer</p>
                    <p className="homeText4">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus</p>
                    <div className="centerHomeButton">
                        <Button className="homeButton">Hire Me</Button>
                    </div>
                </Col>
                <Col lg={6} className="avatarImageContainer d-flex align-items-center justify-content-end">
                    <img src={Avatar} className="avatarImage" alt="Avatar"/>
                </Col>
            </Row>
        </div>
    )
}