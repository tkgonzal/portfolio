import ProjectEntry from "../components/Projects/ProjectEntry.jsx"

import projects from "../data/Projects/projects.js"

import "./Projects.css"

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
            <h1>Wake Up and Make Stuff</h1>
            <div className="projects--top">
                <div className="projects--table-of-contents">
                    <h2 className="projects--header">
                        Table of Contents
                    </h2>
                    <ul className="projects--directory">
                        {projectDirectoryContent}
                    </ul>
                </div>

                <p className="projects--blurb">
                    An assortment of projects I've worked on or made.
                </p>
            </div>

            <h2 className="projects--header">Projects</h2>
            {projectEntries}
        </>
    )
}

export default Projects