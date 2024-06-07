import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';

export default function App() {
    return (
        <div>
            <NavbarComponent/>
            <Home/>
            <About/>
            <Services/>
        </div>
    )
}