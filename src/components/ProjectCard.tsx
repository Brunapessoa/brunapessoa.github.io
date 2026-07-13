import { Link } from "react-router-dom";



type ProjectCardProps = {
    projectImage: string,
    titleProject: string,
    description: string,
    processRoute: string,
    projectURL: string  
}

function ProjectCard({ projectImage, titleProject, description, processRoute, projectURL }: ProjectCardProps) {
    return (
        <section className="relative h-60 overflow-hidden rounded-2xl">
            <img src={projectImage} alt="projectImage" className="absolute inset-0 w-full h-full object-cover"/>
            <div className=""/>
            <div className="absolute bottom-0 left-1 p-4">
                <h3>{titleProject}</h3>
                <p >{description}</p>
            
                <div className="flex flex-row gap-2">
                    <a href={projectURL} target="_blank" rel="noopener noreferrer">
                        <button className="px-2 py-1 border-2 border-orange-600">View Project</button>
                    </a>
                    <Link to={processRoute}>
                        <button className="px-2 py-1 border-2 border-orange-600">View Process</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ProjectCard