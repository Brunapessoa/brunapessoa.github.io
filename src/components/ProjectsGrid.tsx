import ProjectCard from "./ProjectCard"
import heroImg from "../assets/hero.png"

function ProjectsGrid() {
    return (
        <>
        <ProjectCard titleProject="Plan B" description="Workout control App" projectImage={heroImg} processRoute="/projects/PlanB" projectURL="https://brunapessoa.github.io/b-plan-training/"/>

        <ProjectCard titleProject="Favorite Recipes" description="Recipe search based on TheMealDB API" projectImage={heroImg} processRoute="/projects/Recipes" projectURL="https://brunapessoa.github.io/recipes/"/>

        <ProjectCard titleProject="Weatherly" description="Forecast page based on WeatherAPI and images from Unsplash" projectImage={heroImg} processRoute="/projects/Weather" projectURL="https://brunapessoa.github.io/weather/"/>

        <ProjectCard titleProject="Tasks Management" description="Page for management of tasks" projectImage={heroImg} processRoute="/projects/TasksMng" projectURL="https://brunapessoa.github.io/to-do-list-react/"/>
    </>
    )
}

export default ProjectsGrid;
