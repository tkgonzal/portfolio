import "./ProjectEntry.css"

/**
 * @param {props} props A props object containing
 * -project {Object} An object representing data concerning a project I've worked
 * on, which has the following members
 *  -id {number} A number representing an id (as if the data were from a db)
 *  -slug {string} A string to use for the id of the project entry, such that
 *   the user can be linked and jumped to certain ProjectEntry's
 *  =title {string} The title of the project
 *  -subtitle {string} The subtitle of the project, to describe it succinctly
 *  -description {string} A more in depth description of the project
 *  -demoImg {string} An filepath for an image to use as the "thumbnail" of the
 *   project
 *  -links {Object} Links to more dedicated pages on the project. Each link object
 *   contains
 *      -text {string} The text to describe and represent the link
 *      -href {string} The link to the actual page
 *  -details {string[]} An array of relevant details pertaining to the project's
 *   development
 *  -techStack {string[]} An array of the most important languages/tech used 
 *   to develop the project
 * @returns {ReactElement} The formatted relevant information concerning a 
 * project I've worked on to display in my portfolio
 */
function ProjectEntry({ project }) {
    // Links to more dedicated pages for the project
    const linkLis = project.links.map(link =>
        <li key={link.href}>
            <a 
                href={link.href}
                target="_blank"
            >
                {link.text}
            </a>
        </li>
    )

    // List items details important beats of the project development
    const workDetailsLis = project.details.map(detail => 
        <li key={detail}>
            {detail}
        </li>    
    )

    // List items of the project tech stack
    const techStackLis = project.techStack.map(tech => 
        <li key={tech}>
            {tech}
        </li>    
    )

    return (
        <div className="project-entry" id={project.slug}>
            <img 
                src={project.demoImg} 
                alt={project.title} 
                title={project.title}
                className="pe--demo" 
            />
            <div className="pe--info">
                <h2>{project.title}</h2>
                <h3>{project.subtitle}</h3>
                <ul className="pe--links">
                    {linkLis}
                </ul>
                <hr />
                <p>{project.description}</p>
                <hr />
                <ul className="pe--details">
                    {workDetailsLis}
                </ul>
                <hr />
                <ul className="pe--tech-stack">
                    {techStackLis}
                </ul>
            </div>
        </div>
    )
}

export default ProjectEntry