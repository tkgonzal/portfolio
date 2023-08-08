import "./Footer.css"

import stamps from "../data/Footer/stamps.js"

function Footer() {
    const stampImgs = stamps.map(stamp => 
        <img
            key={stamp.src}
            src={stamp.src}
            alt={stamp.alt}
            title={stamp.title}
        />    
    )

    return (
        <footer>
            <div className="footer--marquee">
                {stampImgs}
            </div>
            <h6 className="footer--credit">made by tk</h6>
        </footer>
    )
}

export default Footer