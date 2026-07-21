import ProjectCard from "./ProjectCard"
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import planBImg from "../assets/projects/planB/planBcard.png";
import recipeImg from "../assets/projects/recipes/recipes.png";
import weatherImg from "../assets/projects/weather/NY.png";
import todolistImg from "../assets/projects/todolist/todolist-react.png"

function ProjectsGrid() {

    const langContext = useContext(LanguageContext)
        
        if(!langContext) {
            return null
        }
        
        const { translations } = langContext;

    return (
    <>
        <section id="projects" className="flex flex-col gap-10 py-20 px-10 max-w-6xl mx-auto w-full md:px-20 ">
            <h2 className="flex items-baseline gap-5 section-title font-bold font-sans text-text-main text-2xl"><span className="text-accent text-sm font-mono font-bold">02</span>{translations.projects}</h2>
            
            <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:auto-rows-70">
                <div className="lg:col-span-2 lg:row-span-2" >
                    <ProjectCard titleProject="Plan B" description={translations.planBDesc} projectImage={planBImg} processRoute="/projects/PlanB" projectURL="https://brunapessoa.github.io/b-plan-training/"/>
                </div>         

                <ProjectCard titleProject="Favorite Recipes" description={translations.recipeDesc} projectImage={recipeImg} processRoute="/projects/Recipes" projectURL="https://brunapessoa.github.io/recipes/"/>

                <ProjectCard titleProject="Weatherly" description={translations.weatherDesc}projectImage={weatherImg} processRoute="/projects/Weather" projectURL="https://brunapessoa.github.io/weather/"/>

                <ProjectCard titleProject="Tasks Management" description={translations.tasksDesc} projectImage={todolistImg} processRoute="/projects/TasksMng" projectURL="https://brunapessoa.github.io/to-do-list-react/"/>
            
            </div>

        </section>
    </>
    )
}

export default ProjectsGrid;
