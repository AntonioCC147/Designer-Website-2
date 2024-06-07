import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

import Avatar2 from '../../assets/Images/Avatar2.png';

import '../Home/Home.css';
import './About.css';

export default function About() {
    return (
        <div className="containerAbout" id="about">
            <Row>
                <Col lg={6} className="d-flex flex-column align-items-center justify-content-center">
                    <img src={Avatar2} className="avatarImage" alt="Avatar"/>
                </Col>
                <Col lg={6}>
                    <p className="aboutText1">About Me</p>
                    <p className="aboutText2">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus</p>
                    <p className="aboutText3">UX</p>
                    <ProgressBar now={90}/>
                    <p className="aboutText3">Website Design</p>
                    <ProgressBar now={70}/>
                    <p className="aboutText3">App Design</p>
                    <ProgressBar now={80}/>
                    <p className="aboutText3">graphic Design</p>
                    <ProgressBar now={60}/>
                </Col>
            </Row>
        </div>
    )
}