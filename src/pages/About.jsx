import { Link } from "react-router-dom"

import Socials from "../components/About/Socials"

import socialsData from "../data/About/socials"

import portraitImg from "../assets/portrait.jpg"

import "./About.css"

function About() {
    return (
        <>
            <h1>It's Me</h1>
            <div className="about--intro">
                <img
                    className="about--portrait"
                    src={portraitImg} 
                    alt="A picrew potrait of me"
                    title="A portait of me made in pepperjacket's picrew pfp maker"
                />

                <div className="about--intro-text">
                    <p className="about--blurb">
                        I'm Traven, and I'm a fullstack developer, currently looking for
                        software engineering/web development work. Read below to 
                        check up on some of my credentials, 
                        and <Link to="/projects">click here</Link> to peruse
                        some of my projects.
                    </p>

                    <Socials
                        socialsData={socialsData}
                    />
                </div>
            </div>


            <h2 className="about--header">Proficiences</h2>
            <h3 className="about--subheader">Languages</h3>
            <ul className="about--skills">
                <li>Python</li>
                <li>C/C++</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>HTML/CSS</li>
            </ul>
            <h3 className="about--subheader">Other Technologies</h3>
            <ul className="about--skills">
                <li>Node.js</li>
                <li>React</li>
                <li>React Router</li>
                <li>Express</li>
                <li>Bootstrap</li>
                <li>Git/GitHub</li>
                <li>Windows</li>
                <li>Linux/UNIX</li>
            </ul>
            <h3 className="about--subheader">Soft Skills</h3>
            <ul className="about--skills">
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Pair Programming</li>
                <li>Adept Learning</li>
                <li>Agile Methodology</li>
            </ul>

            <h2 className="about--header">Experience</h2>
            <span className="about--name-date">
                <h3 className="about--subheader">
                    Bay Valley Tech, Web Development Intern
                </h3>
                <em><span className="date">Apr 2023</span> - Pres</em>
            </span>
            <ul className="about--bullet-points">
                <li>
                    Worked in a team to develop several web applications 
                    using the MERN stack, heavily utilizing React and Node.js
                    to create efficient and user friendly programs
                </li>
                <li>
                    Applied Agile Methodology in work with Trello and 
                    GitHub Projects to streamline team's development
                    process
                </li>
                <li>
                    Communicated and advised with applicants to Bay Valley Tech
                    in order to improve company outreach and provide assistance
                    as needed
                </li>
            </ul>

            <h2 className="about--header">Education</h2>
            <span className="about--name-date">
                <h3 className="about--subheader">
                    University of California, Irvine
                </h3>
                <em>
                    <span className="date">
                        Sep 2017
                    </span> - <span className="date">Mar 2021</span></em>
            </span>
            <ul className="about--bullet-points">
                <li>B.S. in Computer Science</li>
                <li>Specialization in General Computer Science</li>
                <li>Summa Cum Laude</li>
                <li>Dean's Honor List (achieved during all quarters of attendance)</li>
            </ul>
        </>
    )
}

export default About