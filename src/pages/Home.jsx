import PortfolioLink from "../components/Home/PortfolioLink.jsx"

import aboutImg from "../assets/portfolio-link-assets/about.png"
import aboutHoverImg from "../assets/portfolio-link-assets/about-hover.png"

import "./Home.css"

function Home() {
    return (
        <>
            <h1>Come One, Come All to This Tragic Affair</h1>
            <p className="home--blurb">
                Welcome to my home grown, farm to table, DIY portfolio site.
                Take a look around to learn more about me and some of the 
                programming work I've done.
            </p>

            <h2>Check these out!</h2>
            <div className="home--portfolio-link-row">
                <div className="home--portfolio-link-container">
                    <PortfolioLink
                        img={aboutImg}
                        imgHover={aboutHoverImg}
                        href="/about"
                        text="About"
                    />
                </div>
                <div className="home--portfolio-link-container">
                </div>
            </div>

            <p className="home--blurb">
                This site's aesthetic is largely inspired by the Y2K aesthetic,
                namely how sites were designed around that time. I have a fondness
                for the style of early anime and video game blogs and fan forums, 
                so this portfolio is my attempt at trying to achieve that 
                look using modern front end techniques, namely with React and 
                React-Router.
            </p>
        </>
    )
}

export default Home