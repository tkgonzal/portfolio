import "./ProjectEntry.css"

function ProjectEntry({ project }) {
    const linkLis = project.links.map(link =>
        <li>
            <a 
                href={link.href}
                target="_blank"
            >
                {link.text}
            </a>
        </li>
    )

    const workDetailsLis = project.details.map(detail => 
        <li>
            {detail}
        </li>    
    )

    const techStackLis = project.techStack.map(tech => 
        <li>
            {tech}
        </li>    
    )

    return (
        <div className="project-entry">
            <img 
                src={project.demoImg} 
                alt={project.title} 
                className="pe--demo" 
            />
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
    )
}

export default ProjectEntry