import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"

import "./PortfolioLink.css"

function PortfolioLink({ img, imgHover, href, text }) {
    const imgRef = useRef(null)
    const [hovered, setHovered] = useState(false)

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