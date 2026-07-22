import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";
import htmlIcon from "../../assets/tech/html5-original.svg";
import cssIcon from "../../assets/tech/css3-original.svg";
import jsIcon from "../../assets/tech/javascript.svg";
import gif from "../../assets/projects/planB/PlanB-v3.mp4";
import frameImgs from "../../assets/projects/planB/frame-2.png"
import workout from "../../assets/projects/planB/workout.jpeg";
import Footer from "../../components/Footer";


function PlanB() {

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
                    <h1 className="font-display text-text-main text-6xl font-semibold">Plan B</h1>
                    <p>{translations.planBDescPhrase}</p>
                    <div className="flex flex-wrap justify-start gap-2 my-4">
                        <span className="flex items-center gap-2 bg-bg-card border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={htmlIcon} alt="HTML5" className="w-4.5"/> HTML5</span>
                        <span className="flex items-center gap-2 bg-bg-card border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={cssIcon} alt="CSS3" className="w-4"/> CSS3</span>
                        <span className="flex items-center gap-2 bg-bg-card  border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={jsIcon} alt="JavaScript" className="w-4"/> JavaScript</span>
                    </div>
                    <div className="flex flex-row gap-4 my-2">
                        <a href="https://brunapessoa.github.io/b-plan-training/" target="_blank" rel="noopener noreferrer">
                            <button className="px-3 py-1.5 border-2 rounded-lg bg-accent border-accent text-black text-sm/7 font-semibold hover:cursor-pointer hover:opacity-90">{translations.projectBtn}</button>
                        </a>
                        <a href="https://github.com/Brunapessoa/b-plan-training" target="_blank" rel="noopener noreferrer">
                            <button className="bg-accent-soft px-3 py-1.5 border-2 rounded-lg border-border text-text-muted text-sm/7 text-shadow-md font-semibold hover:border-accent hover:bg-accent-soft hover:text-accent hover:cursor-pointer">{translations.onGHBtn}</button>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-20 md:grid md:grid-cols-2 md:items-start ">

                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.context}</h2>
                        <p>{translations.planBContextP1}
                        </p>
                        <p>{translations.planBContextP2}
                        </p>
                        <p>{translations.planBContextP3}
                        </p>
                        <p>{translations.planBContextP4}
                        </p>
                        <p>{translations.planBContextP5}
                        </p>
                        <p>{translations.planBContextP6}
                        </p>
                    </div>
                    <div className="mx-auto w-62.5 h-auto overflow-hidden">
                        <video src={gif} autoPlay loop muted playsInline className="rounded-lg border border-border"></video>
                    </div>
                </div>
                <div className="flex flex-col gap-5 border-l-2 border-accent pl-5 md:items-start">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.decision}</h2>
                        <p>{translations.planBDecisionP1}</p>
                        <p>{translations.planBDecisionP2}</p>
                        <p>{translations.planBDecisionP3}</p>
                        <p>{translations.planBDecisionP4}</p>
                </div>
                <div className="flex flex-col gap-20 md:grid md:grid-cols-2 md:items-center">
                    <img src={frameImgs} alt="" className="w-80 mx-auto"/>

                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.challenges}</h2>
                        <p>{translations.planBChallengesP1}</p>
                        <p>{translations.planBChallengesP2}</p>
                        <p>{translations.planBChallengesP3}</p>
                        <p>{translations.planBChallengesP4}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-20 md:grid md:grid-cols-2 md:items-center">
                    <img src={workout} alt="" className=" mx-auto rounded-lg border border-border w-62 md:order-last" />
                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.technologies}</h2>
                        <p>{translations.planBTechP1}</p>
                        <p>{translations.planBTechP2}</p>
                        <p>{translations.planBTechP3}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                    <h2 className="font-bold font-sans text-text-main text-2xl">{translations.next}</h2>
                    <p>{translations.planBNextP1}</p>
                    <p>{translations.planBNextP2}</p>
                    <p>{translations.planBNextP3}</p>
                    <p>{translations.planBNextP4}</p>
                </div>
                <div className="flex justify-end">
                    <Link to="/projects/Recipes" className="font-semibold hover:text-accent">Favorite Recipes →</Link>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default PlanB;