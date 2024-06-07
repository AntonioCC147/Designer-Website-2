import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Icon1 from '../../assets/Icons/Icon1.png';
import Icon2 from '../../assets/Icons/Icon2.png';
import Icon3 from '../../assets/Icons/Icon3.png';
import Icon4 from '../../assets/Icons/Icon4.png';

import './Services.css';

export default function Services() {
    return (
        <div className="containerServices " id="services">
            <p className="servicesText1">Services</p>
            <p className="servicesText2">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.</p>
            <Row className="justify-content-center">
                <Col xl={3} lg={4} md={6} sm={12} className="d-flex justify-content-center mb-3">
                    <div className="servicesCard">
                        <img src={Icon1} className="servicesIcons" alt="Icon1"/>
                        <p className="servicesText" style={{marginTop: "20px"}}>UI/UX</p>
                        <p className="servicesDescription">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh. Imperdiet convallis blandit felis ligula.</p>
                    </div>
                </Col>
                <Col xl={3} lg={4} md={6} sm={12} className="d-flex justify-content-center mb-3">
                    <div className="servicesCard">
                        <img src={Icon2} className="servicesIcons" alt="Icon1"/>
                        <p className="servicesText">Web Design</p>
                        <p className="servicesDescription">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh. Imperdiet convallis blandit felis ligula.</p>
                    </div>
                </Col>
                <Col xl={3} lg={4} md={6} sm={12} className="d-flex justify-content-center mb-3">
                    <div className="servicesCard">
                        <img src={Icon3} className="servicesIcons2" alt="Icon1"/>
                        <p className="servicesText">App Design</p>
                        <p className="servicesDescription">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh. Imperdiet convallis blandit felis ligula.</p>
                    </div>
                </Col>
                <Col xl={3} lg={4} md={6} sm={12} className="d-flex justify-content-center mb-3">
                    <div className="servicesCard">
                        <img src={Icon4} className="servicesIcons" alt="Icon1"/>
                        <p className="servicesText" style={{marginTop: "30px"}}>Graphic Design</p>
                        <p className="servicesDescription">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh. Imperdiet convallis blandit felis ligula.</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}