import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <div className="title">Nav</div>
            <ul className="nav--links">
                <li>Home</li>
                <li>About</li>
                <ul className="nav--about-links">
                    <li>About Me</li>
                    <li>Interests</li>
                </ul>
                <li>Portfolio</li>
                <li>Credits</li>
            </ul>
        </nav>
    )
}

export default Navbar;