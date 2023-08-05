import ProjectEntry from "../components/Projects/ProjectEntry.jsx"

import projects from "../data/projects.js"

function Projects() {
    const projectEntries = projects.map(project => 
        <ProjectEntry 
            key={project.id}
            project={project}
        />    
    )

    const projectDirectoryContent = projects.map(project =>
        <li
            key={project.id}
        >
            <a href={`#${project.slug}`}>
                {project.title}
            </a>
        </li>
    )

    return (
        <>
            <h1>Whippin in the Kitchen</h1>
            <p className="projects--blurb">
                An assortment of projects
            </p>
            <h2 className="projects--header">Table of Contents</h2>
            <ul>
                {projectDirectoryContent}
            </ul>
            <h2>Projects</h2>
            {projectEntries}
        </>
    )
}

export default Projects