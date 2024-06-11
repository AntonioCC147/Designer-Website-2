import Button from 'react-bootstrap/Button';

import './Contact.css';

export default function Contact() {
    return (
        <div className="containerContact" id="contact">
            <p className="contactText1">Lets Design Together</p>
            <p className="contactText2">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.</p>
            <div className="contactButtons">
                <input type="text" placeholder="Enter Your Email" className="inputText"/>
                <Button className="contactButton">Contact Me</Button>
            </div>
        </div>
    )
}