import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import reactIcon from "../../assets/tech/react-original.svg"
import tailwindIcon from "../../assets/tech/tailwindcss.svg";
import tsIcon from "../../assets/tech/typescript-original.svg";
import firstimg from "../../assets/projects/planB-w-ai/firstimg.png"
import networkImg from "../../assets/projects/planB-w-ai/network-2.png"
import genErrorPlan from "../../assets/projects/planB-w-ai/generating-error-plan.png"
// import errorImg from "../../assets/projects/planB-w-ai/error-msg.jpeg"
// import tableImg from "../../assets/projects/planB-w-ai/table-generated.jpeg"


function Recipes() {

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
                <h1 className="font-display text-text-main text-6xl font-semibold">Plan B with AI</h1>
                <p className="mt-3">{translations.planBAIDescPhrase}</p>
                <div className="flex flex-wrap justify-start gap-2 my-4">
                    <span className="flex items-center gap-2 bg-bg-card  border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={reactIcon} alt="React" className="w-4"/> React</span>
                    <span className="flex items-center gap-2 bg-bg-card  border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={tsIcon} alt="TypeScript" className="w-4"/> TypeScript</span>
                    <span className="flex items-center gap-2 bg-bg-card border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={tailwindIcon} alt="Tailwind" className="w-4"/>Tailwind</span>
                </div>
                <div className="flex flex-row gap-4 my-2">
                    <a href="https://plan-b-w-ai.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <button className="px-3 py-1.5 border-2 rounded-lg bg-accent border-accent text-black text-sm/7 font-semibold hover:cursor-pointer hover:opacity-90">{translations.projectBtn}</button>
                    </a>
                    <a href="https://github.com/Brunapessoa/plan-b-w-ai" target="_blank" rel="noopener noreferrer">
                        <button className="bg-accent-soft px-3 py-1.5 border-2 rounded-lg border-border text-text-muted text-sm/7 text-shadow-md font-semibold hover:border-accent hover:bg-accent-soft hover:text-accent hover:cursor-pointer">{translations.onGHBtn}</button>
                    </a>
                </div>
                </div>
                <div className="flex flex-col gap-20 md:grid md:grid-cols-2 md:items-start ">

                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.context}</h2>
                        <p>{translations.planBAIContextP1}</p>
                        <p>{translations.planBAIContextP2}</p>
                        <p>{translations.planBAIContextP3}</p>
                    </div>
                    <div className="mx-auto">
                        <img src={firstimg} alt="" className=" w-80 h-auto md:w-120 mx-auto"/>
                    </div>
                </div>
                    
                <div className="flex flex-col gap-5 border-l-2 border-accent pl-5 md:items-start">
                    <h2 className="font-bold font-sans text-text-main text-2xl">{translations.decision}</h2>
                    <p>{translations.planBAIDecisionP1}</p>
                    <p>{translations.planBAIDecisionP2}</p>
                    <p>{translations.planBAIDecisionP3}</p>
                    <p>{translations.planBAIDecisionP4}</p>
                </div>
                <img src={networkImg} alt="" className="w-110 mx-auto md:w-200 rounded-2xl"/>
                    

                <div className="flex flex-col gap-20 md:grid md:grid-cols-2 md:items-center">

                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.challenges}</h2>
                        <p>{translations.planBAIChallengesP1}</p>
                        <p>{translations.planBAIChallengesP2}</p>
                        <p>{translations.planBAIChallengesP3}</p>
                    </div>
                    <img src={genErrorPlan} alt="" className="w-80 mx-auto md:w-120"/>
                </div>
                <div className="flex flex-col gap-20 md:grid md:grid-cols-1 md:items-center">
                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.technologies}</h2>
                        <p>{translations.planBAITechP1}</p>
                        <p>{translations.planBAITechP2}</p>
                    </div>
                </div>
                <div className="flex flex-row justify-end">
                    <Link to="/projects/PlanB" className="font-semibold hover:text-accent">Plan B →</Link>
                </div>
        </main>
        <Footer />
        </>
    )
    
}

export default Recipes;