import PortfolioLink from "../components/Home/PortfolioLink.jsx"

import aboutImg from "../assets/portfolio-link-assets/about.png"
import aboutHoverImg from "../assets/portfolio-link-assets/about-hover.png"
import projectsImg from "../assets/portfolio-link-assets/projects.png"
import projectsHoverImg from "../assets/portfolio-link-assets/projects-hover.png"

import "./Home.css"

/**
 * @returns {Home} The Home page which essentially acts as the website's landing page.
 * Contains PortfolioLinks to direct users to the most important parts of the website
 * along with some short information regarding my thoughts on the portfolio itself
 */
function Home() {
    return (
        <>
            <h1>Come One, Come All to This Tragic Affair</h1>
            <p className="home--blurb">
                Welcome to my home grown, farm to table, DIY portfolio site.
                Take a look around to learn more about me and some of the 
                programming work I've done.
            </p>

            <h2 className="home--subheader">Check these out!</h2>
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
                    <PortfolioLink
                        img={projectsImg}
                        imgHover={projectsHoverImg}
                        href="/projects"
                        text="Projects"
                    />
                </div>
            </div>

            <p className="home--blurb">
                This site's aesthetic is largely inspired by the Y2K aesthetic,
                namely how sites were designed around that time. I have a fondness
                for the style of early anime and video game blogs and fan forums, 
                so this portfolio is my attempt at trying to achieve that 
                look using modern front end techniques and technologies, namely 
                with React and React-Router.
            </p>
        </>
    )
}

export default Home