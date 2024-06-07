import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';

export default function App() {
    return (
        <div>
            <NavbarComponent/>
            <Home/>
            <About/>
        </div>
    )
}