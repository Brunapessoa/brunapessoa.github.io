import { Link } from "react-router-dom"


type ProjectCardProps = {
    projectImage: string,
    titleProject: string,
    description: string,
    processRoute: string,
    projectURL: string  
}

function ProjectCard({ projectImage, titleProject, description, processRoute, projectURL }: ProjectCardProps) {
    return (
        <div>
            <img src={projectImage} alt="projectImage"/>
            <h3>{titleProject}</h3>
            <p>{description}</p>
            <a href={projectURL} target="_blank" rel="noopener noreferrer">
                <button>View Project</button>
            </a>
            <Link to={processRoute}>
                <button>View Process</button>
            </Link>
        </div>
    )
}

export default ProjectCard