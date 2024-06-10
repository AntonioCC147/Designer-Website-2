import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CarouselAvatar from '../../assets/Images/CarouselAvatar.png';

import './Testimonials.css';

export default function Testimonials() {
    return (
        <div className="containerTestimonials" id="testimonials">
            <p className="testimonialsText1">Testimonials</p>
            <p className="testimonialsText2">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.</p>
            <Row className="text-center">
                <Carousel className="carouselContainer">
                    <Carousel.Item interval={2500}>
                        <Row>
                            <Col lg={3}>
                                <img src={CarouselAvatar} className="carouselImage" alt="CarouselAvatar"/>
                            </Col>
                            <Col lg={9}>
                                <p className="carouselText">Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis. Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="carouselName">Name</p>
                                <p className="carouselText">CEO</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <Row>
                            <Col lg={3}>
                                <img src={CarouselAvatar} className="carouselImage" alt="CarouselAvatar"/>
                            </Col>
                            <Col lg={9}>
                                <p className="carouselText">Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis. Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="carouselName">Name</p>
                                <p className="carouselText">CEO</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <Row>
                            <Col lg={3}>
                                <img src={CarouselAvatar} className="carouselImage" alt="CarouselAvatar"/>
                            </Col>
                            <Col lg={9}>
                                <p className="carouselText">Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis. Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="carouselName">Name</p>
                                <p className="carouselText">CEO</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <Row>
                            <Col lg={3}>
                                <img src={CarouselAvatar} className="carouselImage" alt="CarouselAvatar"/>
                            </Col>
                            <Col lg={9}>
                                <p className="carouselText">Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis. Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="carouselName">Name</p>
                                <p className="carouselText">CEO</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <Row>
                            <Col lg={3}>
                                <img src={CarouselAvatar} className="carouselImage" alt="CarouselAvatar"/>
                            </Col>
                            <Col lg={9}>
                                <p className="carouselText">Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis. Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="carouselName">Name</p>
                                <p className="carouselText">CEO</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </div>
    )
}