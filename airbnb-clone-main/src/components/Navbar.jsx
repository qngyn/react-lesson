import logo from "../assets/airbnb-logo.png"
import './Navbar.css'

function Navbar () {
    return (
        <nav className = "nav-item"> 
            <img src = {logo} className = "logo"/>
        </nav>
    )
}

export default Navbar;