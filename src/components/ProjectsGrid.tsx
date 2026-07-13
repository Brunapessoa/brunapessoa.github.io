import ProjectCard from "./ProjectCard"
import planBImg from "../assets/projects/plan-b-card.png";
import recipeImg from "../assets/projects/recipes.png";
import weatherImg from "../assets/projects/weatherly1.png";
import todolistImg from "../assets/projects/todolist-react.png"

function ProjectsGrid() {
    return (
    <>
        <section id="projects" className="flex flex-col gap-8 py-20 px-15">
            <h2 className="flex items-baseline gap-5 section-title font-bold font-sans text-text-main text-2xl"><span className="text-accent text-sm font-mono font-bold">02</span>Projects</h2>

            <ProjectCard titleProject="Plan B" description="Workout control App" projectImage={planBImg} processRoute="/projects/PlanB" projectURL="https://brunapessoa.github.io/b-plan-training/"/>

            <ProjectCard titleProject="Favorite Recipes" description="Recipe search based on TheMealDB API" projectImage={recipeImg} processRoute="/projects/Recipes" projectURL="https://brunapessoa.github.io/recipes/"/>

            <ProjectCard titleProject="Weatherly" description="Forecast page based on WeatherAPI and images from Unsplash" projectImage={weatherImg} processRoute="/projects/Weather" projectURL="https://brunapessoa.github.io/weather/"/>

            <ProjectCard titleProject="Tasks Management" description="Page for management of tasks" projectImage={todolistImg} processRoute="/projects/TasksMng" projectURL="https://brunapessoa.github.io/to-do-list-react/"/>
        </section>
    </>
    )
}

export default ProjectsGrid;
