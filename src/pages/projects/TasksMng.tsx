import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import reactIcon from "../../assets/tech/react-original.svg";
import tailwindIcon from "../../assets/tech/tailwindcss.svg";
import jsIcon from "../../assets/tech/javascript.svg";


function TasksMng() {
    
    const langContext = useContext(LanguageContext)
            
        if(!langContext) {
            return null
        }
            
    const { translations } = langContext
    
    return (
        <>
        <Header />
            <main className="flex flex-col gap-20 px-10 pt-10 pb-5 max-w-6xl mx-auto w-full md:px-20">
                
            <Link to="/" className="font-semibold hover:text-accent">← Bruna Pessoa </Link>
            
            <div>
                <h1 className="font-display text-text-main text-6xl font-semibold">Tasks Management</h1>
                <p className="mt-3">{translations.tasksDescPhrase}</p>
                <div className="flex flex-wrap justify-start gap-2 my-4">
                    <span className="flex items-center gap-2 bg-bg-card  border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={reactIcon} alt="React" className="w-4"/>React</span>
                    <span className="flex items-center gap-2 bg-bg-card  border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={jsIcon} alt="JavaScript" className="w-4"/>JavaScript</span>
                    <span className="flex items-center gap-2 bg-bg-card border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={tailwindIcon} alt="Tailwind" className="w-4"/>Tailwind</span>
                </div>
                <div className="flex flex-row gap-4 my-2">
                    <a href="https://brunapessoa.github.io/to-do-list-react/" target="_blank" rel="noopener noreferrer">
                        <button className="px-3 py-1.5 border-2 rounded-lg bg-accent border-accent text-black text-sm/7 font-semibold hover:cursor-pointer hover:opacity-90">{translations.projectBtn}</button>
                    </a>
                    <a href="https://github.com/Brunapessoa/to-do-list-react" target="_blank" rel="noopener noreferrer">
                        <button className="bg-accent-soft px-3 py-1.5 border-2 rounded-lg border-border text-text-muted text-sm/7 text-shadow-md font-semibold hover:border-accent hover:bg-accent-soft hover:text-accent hover:cursor-pointer">{translations.onGHBtn}</button>
                    </a>
                </div>
                </div>
                <div className="flex flex-col gap-20 md:grid md:grid-cols-2 md:items-start ">

                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.context}</h2>
                        <p>{translations.tasksContextP1}</p>
                        <p>{translations.tasksContextP2}</p>
                    </div>
                    <div className="mx-auto">
                        <img src="" className="w-62.5 h-auto"></img>
                    </div>
                </div>
                    
                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5 md:items-start">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.decision}</h2>
                        <p>{translations.tasksDecisionP1}</p>
                        <p>{translations.tasksDecisionP2}</p>
                        <p>{translations.tasksDecisionP3}</p>
                        <p>{translations.tasksDecisionP4}</p>
                        <p>{translations.tasksDecisionP5}</p>
                    </div>

                <div className="flex flex-col gap-20 md:grid md:grid-cols-2 md:items-center">
                    <img src="" alt="" className="w-80 mx-auto"/>

                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.challenges}</h2>
                        <p>{translations.tasksChallengesP1}</p>
                        <p>{translations.tasksChallengesP2}</p>
                        <p>{translations.tasksChallengesP3}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-20 md:grid md:grid-cols-2 md:items-center">
                    <img src="" alt="" className=" mx-auto rounded-lg border border-border w-62 md:order-last" />
                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.technologies}</h2>
                        <p>{translations.tasksTechP1}</p>
                        <p>{translations.tasksTechP2}</p>
                    </div>
                </div>
                <div className="flex flex-row justify-start">
                    <Link to="/projects/Weather" className="font-semibold hover:text-accent">← Weatherly</Link>
                </div>
        </main>
        <Footer />
        </>
    )
}

export default TasksMng