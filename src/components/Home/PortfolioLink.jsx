import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"

import "./PortfolioLink.css"

/**
 * @param {Object} props A props object containing
 * -img {string} The location for an image to display for the link
 * -imgHover {string} The location for an image to display when the user hovers
 * over the component
 * -href {string} The page on the website to navigate to 
 * -text {string} The text to display for the link, as well as the text
 * to use for the title and alt attributes of the image
 * @returns {ReactElement} A component with a visual to be displayed 
 * on the home page that links the user to a pertinent page on the portfolio site
 */
function PortfolioLink({ img, imgHover, href, text }) {
    const imgRef = useRef(null)
    const [hovered, setHovered] = useState(false)

    // When the user hovers over the component, use the imgHover as the source
    useEffect(() => {
        const newImg = hovered ? imgHover : img

        imgRef.current.src = newImg
    }, [hovered])

    return (
        <div className="portfolio-link">
            <Link
                to={href}
            >
                <img
                    className="pl--img"
                    ref={imgRef}
                    src={img}
                    alt={`${text} image`}
                    title={`Click to go to ${text} page`}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                />
                <h3 
                    className="pl--text"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {text}
                </h3>
            </Link>

        </div>
    )
}

export default PortfolioLink