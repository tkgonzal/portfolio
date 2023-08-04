import ProjectEntry from "../components/Projects/ProjectEntry.jsx"

import projects from "../data/projects.js"

function Projects() {
    const projectEntries = projects.map(project => 
        <ProjectEntry 
            key={project.id}
            project={project}
        />    
    )

    return (
        <>
            <div className="title">Projects</div>
            {projectEntries}
        </>
    )
}

export default Projects