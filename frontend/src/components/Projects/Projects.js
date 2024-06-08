import { useState } from 'react';

import Carousel from "react-multi-carousel";
import Button from 'react-bootstrap/Button';

import Project from '../../assets/Images/Project.png';

import "react-multi-carousel/lib/styles.css";
import './Projects.css';

export default function Projects() {
    const [choose, setChoose] = useState("All");

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="containerProjects" id="projects">
            <p className="projectsText1">My Projects</p>
            <p className="projectsText2">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.</p>
            <div className="text-center">
                <Button className={choose === "All" ? "selectedButton" : "noSelectedButton"} onClick={() => setChoose("All")}>All</Button>
                <Button className={choose === "UI/UX" ? "selectedButton" : "noSelectedButton"} onClick={() => setChoose("UI/UX")}>UI/UX</Button>
                <Button className={choose === "WebDesign" ? "selectedButton" : "noSelectedButton"} onClick={() => setChoose("WebDesign")}>Web Design</Button>
                <Button className={choose === "AppDesign" ? "selectedButton" : "noSelectedButton"} onClick={() => setChoose("AppDesign")}>AppDesign</Button>
                <Button className={choose === "GraphicDesign" ? "selectedButton" : "noSelectedButton"} onClick={() => setChoose("GraphicDesign")}>Graphic Design</Button>
            </div>
            {choose === "All" &&
                <div className="text-center">
                    <Carousel responsive={responsive} className="carousel">
                        <div>
                            <div>
                                <img src={Project} className="imageCarousel" alt="Project"/>
                            </div>
                            <div>
                                <p className="titleCarousel">UI/UX 1</p>
                                <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Project} className="imageCarousel" alt="Project"/>
                            </div>
                            <div>
                                <p className="titleCarousel">UI/UX 2</p>
                                <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Project} className="imageCarousel" alt="Project"/>
                            </div>
                            <div>
                                <p className="titleCarousel">UI/UX 3</p>
                                <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Project} className="imageCarousel" alt="Project"/>
                            </div>
                            <div>
                                <p className="titleCarousel">Web Design 1</p>
                                <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Project} className="imageCarousel" alt="Project"/>
                            </div>
                            <div>
                                <p className="titleCarousel">Web Design 2</p>
                                <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Project} className="imageCarousel" alt="Project"/>
                            </div>
                            <div>
                                <p className="titleCarousel">Web Design 3</p>
                                <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Project} className="imageCarousel" alt="Project"/>
                            </div>
                            <div>
                                <p className="titleCarousel">App Design 1</p>
                                <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Project} className="imageCarousel" alt="Project"/>
                            </div>
                            <div>
                                <p className="titleCarousel">App Design 2</p>
                                <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Project} className="imageCarousel" alt="Project"/>
                            </div>
                            <div>
                                <p className="titleCarousel">App Design 3</p>
                                <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Project} className="imageCarousel" alt="Project"/>
                            </div>
                            <div>
                                <p className="titleCarousel">Graphic Design 1</p>
                                <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Project} className="imageCarousel" alt="Project"/>
                            </div>
                            <div>
                                <p className="titleCarousel">Graphic Design 2</p>
                                <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Project} className="imageCarousel" alt="Project"/>
                            </div>
                            <div>
                                <p className="titleCarousel">Graphic Design 3</p>
                                <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            }
            {choose === "UI/UX" &&
                <div className="text-center">
                    <Carousel responsive={responsive} className="carousel">
                        <div>
                            <div>
                                <img src={Project} className="imageCarousel" alt="Project"/>
                            </div>
                            <div>
                                <p className="titleCarousel">UI/UX 1</p>
                                <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Project} className="imageCarousel" alt="Project"/>
                            </div>
                            <div>
                                <p className="titleCarousel">UI/UX 2</p>
                                <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Project} className="imageCarousel" alt="Project"/>
                            </div>
                            <div>
                                <p className="titleCarousel">UI/UX 3</p>
                                <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            }
            {choose === "WebDesign" &&
                <div className="text-center">
                    <Carousel responsive={responsive} className="carousel">
                        <div>
                            <div>
                                <img src={Project} className="imageCarousel" alt="Project"/>
                            </div>
                            <div>
                                <p className="titleCarousel">Web Design 1</p>
                                <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Project} className="imageCarousel" alt="Project"/>
                            </div>
                            <div>
                                <p className="titleCarousel">Web Design 2</p>
                                <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Project} className="imageCarousel" alt="Project"/>
                            </div>
                            <div>
                                <p className="titleCarousel">Web Design 3</p>
                                <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            }
            {choose === "AppDesign" &&
                <div className="text-center">
                    <div className="text-center">
                        <Carousel responsive={responsive} className="carousel">
                            <div>
                                <div>
                                    <img src={Project} className="imageCarousel" alt="Project"/>
                                </div>
                                <div>
                                    <p className="titleCarousel">App Design 1</p>
                                    <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={Project} className="imageCarousel" alt="Project"/>
                                </div>
                                <div>
                                    <p className="titleCarousel">App Design 2</p>
                                    <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={Project} className="imageCarousel" alt="Project"/>
                                </div>
                                <div>
                                    <p className="titleCarousel">App Design 3</p>
                                    <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            }
            {choose === "GraphicDesign" &&
                <div className="text-center">
                    <div className="text-center">
                        <Carousel responsive={responsive} className="carousel">
                            <div>
                                <div>
                                    <img src={Project} className="imageCarousel" alt="Project"/>
                                </div>
                                <div>
                                    <p className="titleCarousel">Graphic Design 1</p>
                                    <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={Project} className="imageCarousel" alt="Project"/>
                                </div>
                                <div>
                                    <p className="titleCarousel">Graphic Design 2</p>
                                    <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={Project} className="imageCarousel" alt="Project"/>
                                </div>
                                <div>
                                    <p className="titleCarousel">Graphic Design 3</p>
                                    <p className="descriptionCarousel">AirCalling Landing Page Design</p>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            }
        </div>
    )
}