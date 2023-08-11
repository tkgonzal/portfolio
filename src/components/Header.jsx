import { Link } from "react-router-dom"

import LyricsMarquee from "./Header/LyricsMarquee.jsx"

import lyrics from "../data/Header/lyrics.js"

import logoImg from "../assets/personal-logo.png"

import "./Header.css"

/**
 * @returns {ReactElement} The header of the website that displays 
 * the site logo and a marquee of lyrics I enjoy
 */
function Header() {
    return (
        <header>
            <Link to="/">
                <img
                    className="header--logo"
                    src={logoImg}
                    alt="portfolio logo, says 'tkgonzal'"
                    title="tkgonzal"
                />
            </Link>
            <LyricsMarquee lyrics={lyrics} />
        </header>
    )
}

export default Header