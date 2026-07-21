import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


type ProjectCardProps = {
    projectImage: string,
    titleProject: string,
    description: string,
    processRoute: string,
    projectURL: string  
}

function ProjectCard({ projectImage, titleProject, description, processRoute, projectURL }: ProjectCardProps) {

    const langContext = useContext(LanguageContext)
            
        if(!langContext) {
            return null
        }
            
        const { translations } = langContext;

    return (
        <section className="relative h-65 w-full overflow-hidden rounded-2xl border border-border hover:border-accent group lg:h-full">
            <img src={projectImage} alt="projectImage" className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent"/>
            <div className="absolute bottom-0 left-1 p-4 ">
                <h3 className="font-bold text-[22px] text-white text-shadow-md">{titleProject}</h3>
                <p className="text-white text-shadow-md">{description}</p>
           
                <div className="flex flex-row gap-4 my-2">
                    <a href={projectURL} target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 border-2 rounded-lg bg-accent border-accent text-black text-sm/7 font-semibold hover:cursor-pointer hover:opacity-90">{translations.projectBtn}</button>
                    </a>
                    <Link to={processRoute}>
                        <button className="px-4 py-2 border-2 rounded-lg backdrop-blur-md border-border text-white text-sm/7 text-shadow-md font-semibold hover:border-accent hover:bg-accent-soft hover:text-accent hover:cursor-pointer">{translations.processBtn}</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ProjectCard