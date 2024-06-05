import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './components/Navbar/Navbar';
import Home from './components/Home/Home';

export default function App() {
    return (
        <div>
            <NavbarComponent/>
            <Home/>
        </div>
    )
}