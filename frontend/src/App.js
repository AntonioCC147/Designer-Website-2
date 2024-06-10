import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';

export default function App() {
    return (
        <div>
            <NavbarComponent/>
            <Home/>
            <About/>
            <Services/>
            <Projects/>
            <Testimonials/>
        </div>
    )
}