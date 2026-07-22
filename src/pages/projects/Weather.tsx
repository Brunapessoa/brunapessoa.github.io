import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import reactIcon from "../../assets/tech/react-original.svg";
import tailwindIcon from "../../assets/tech/tailwindcss.svg";
import jsIcon from "../../assets/tech/javascript.svg";
import frameNY from "../../assets/projects/weather/Frame-NY2.png";
import frameNoImg from "../../assets/projects/weather/Frame-no-img.png"
import amstImg from "../../assets/projects/weather/Amst.png"

function Weather() {

    const langContext = useContext(LanguageContext)
        
        if(!langContext) {
            return null
        }
        
        const { translations } = langContext
        
    return(
        <>
        <Header />
            <main className="flex flex-col gap-20 px-10 pt-10 pb-5 max-w-6xl mx-auto w-full md:px-20">
                
            <Link to="/" className="font-semibold hover:text-accent">← Bruna Pessoa </Link>
            
            <div>
                <h1 className="font-display text-text-main text-6xl font-semibold">Weatherly</h1>
                <p>{translations.weatherDescPhrase}</p>
                <div className="flex flex-wrap justify-start gap-2 my-4">
                    <span className="flex items-center gap-2 bg-bg-card  border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={reactIcon} alt="React" className="w-4"/>React</span>
                    <span className="flex items-center gap-2 bg-bg-card  border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={jsIcon} alt="JavaScript" className="w-4"/>JavaScript</span>
                    <span className="flex items-center gap-2 bg-bg-card border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={tailwindIcon} alt="Tailwind" className="w-4"/>Tailwind</span>
                </div>
                <div className="flex flex-row gap-4 my-2">
                    <a href="https://brunapessoa.github.io/weather/" target="_blank" rel="noopener noreferrer">
                        <button className="px-3 py-1.5 border-2 rounded-lg bg-accent border-accent text-black text-sm/7 font-semibold hover:cursor-pointer hover:opacity-90">{translations.projectBtn}</button>
                    </a>
                    <a href="https://github.com/Brunapessoa/weather" target="_blank" rel="noopener noreferrer">
                        <button className="bg-accent-soft px-3 py-1.5 border-2 rounded-lg border-border text-text-muted text-sm/7 text-shadow-md font-semibold hover:border-accent hover:bg-accent-soft hover:text-accent hover:cursor-pointer">{translations.onGHBtn}</button>
                    </a>
                </div>
                </div>
                <div className="flex flex-col gap-20 md:grid md:grid-cols-2 md:items-start ">
                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.context}</h2>
                        <p>{translations.weatherContextP1}</p>
                        <p>{translations.weatherContextP2}</p>
                        <p>{translations.weatherContextP3}</p>
                    </div>
                    <div className="mx-auto">
                        <img src={frameNY} alt="" className=" w-80 h-auto overflow-hidden md:w-120 mx-auto md:order-last"/>
                    </div>
                </div>
                    
                <div className="flex flex-col gap-5 border-l-2 border-accent pl-5 md:items-start">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.decision}</h2>
                        <p>{translations.weatherDecisionP1}</p>
                        <p>{translations.weatherDecisionP2}</p>
                        <p>{translations.weatherDecisionP3}</p>
                        <p>{translations.weatherDecisionP4}</p>
                    </div>

                <div className="flex flex-col gap-20 md:grid md:grid-cols-2 md:items-center">
                    <img src={frameNoImg} alt="" className="w-80 md:w-120 mx-auto"/>

                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.challenges}</h2>
                        <p>{translations.weatherChallengesP1}</p>
                        <p>{translations.weatherChallengesP2}</p>
                        <p>{translations.weatherChallengesP3}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-20 md:grid md:grid-cols-2 md:items-center">
                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.technologies}</h2>
                        <p>{translations.weatherTechP1}</p>
                        <p>{translations.weatherTechP2}</p>
                         <p>{translations.weatherTechP3}</p>
                    </div>
                    <img src={amstImg} alt="" className=" mx-auto rounded-lg border border-border w-80 md:w-100"/>
                </div>
                <div className="flex flex-row justify-between">
                    <Link to="/projects/Recipes" className="font-semibold hover:text-accent">← Favorite Recipes</Link>
                    <Link to="/projects/TasksMng" className="font-semibold hover:text-accent">Tasks Management →</Link>
                </div>
        </main>
        <Footer />
        </>
    )
}

export default Weather;