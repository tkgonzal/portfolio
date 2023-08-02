import { Link } from "react-router-dom"

import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <div className="title">Nav</div>
            <ul className="nav--links">
                <li><Link to="/">Home</Link></li>
                <li>About</li>
                <ul className="nav--about-links">
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/interests">Interests</Link></li>
                </ul>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/credits">Credits</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar