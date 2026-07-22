import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import tailwindIcon from "../../assets/tech/tailwindcss.svg";
import tsIcon from "../../assets/tech/typescript-original.svg";
import reactIcon from "../../assets/tech/react-original.svg";
import firstImgs from "../../assets/projects/recipes/firstImgs.png"
import secondImgs from "../../assets/projects/recipes/secondImgs(1).png"
import thirdImg from "../../assets/projects/recipes/search.png"

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
                <h1 className="font-display text-text-main text-6xl font-semibold">Favorite Recipes</h1>
                <p>{translations.recipesDescPhrase}</p>
                <div className="flex flex-wrap justify-start gap-2 my-4">
                    <span className="flex items-center gap-2 bg-bg-card  border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={reactIcon} alt="React" className="w-4"/> React</span>
                    <span className="flex items-center gap-2 bg-bg-card  border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={tsIcon} alt="TypeScript" className="w-4"/> TypeScript</span>
                    <span className="flex items-center gap-2 bg-bg-card border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={tailwindIcon} alt="Tailwind" className="w-4"/>Tailwind</span>
                </div>
                <div className="flex flex-row gap-4 my-2">
                    <a href="https://brunapessoa.github.io/recipes/" target="_blank" rel="noopener noreferrer">
                        <button className="px-3 py-1.5 border-2 rounded-lg bg-accent border-accent text-black text-sm/7 font-semibold hover:cursor-pointer hover:opacity-90">{translations.projectBtn}</button>
                    </a>
                    <a href="https://github.com/Brunapessoa/recipes" target="_blank" rel="noopener noreferrer">
                        <button className="bg-accent-soft px-3 py-1.5 border-2 rounded-lg border-border text-text-muted text-sm/7 text-shadow-md font-semibold hover:border-accent hover:bg-accent-soft hover:text-accent hover:cursor-pointer">{translations.onGHBtn}</button>
                    </a>
                </div>
                </div>
                <div className="flex flex-col gap-20 md:grid md:grid-cols-2 md:items-start ">

                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.context}</h2>
                        <p>{translations.recipesContextP1}</p>
                        <p>{translations.recipesContextP2}</p>
                    </div>
                    <div className="mx-auto">
                        <img src={firstImgs} alt="" className=" w-80 h-auto md:w-100 mx-auto"/>
                    </div>
                </div>
                    
                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5 md:items-start">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.decision}</h2>
                        <p>{translations.recipesDecisionP1}</p>
                        <p>{translations.recipesDecisionP2}</p>
                        <p>{translations.recipesDecisionP3}</p>
                    </div>

                <div className="flex flex-col gap-20 md:grid md:grid-cols-2 md:items-center">
                    <img src={secondImgs} alt="" className="w-80 mx-auto md:w-120"/>

                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.challenges}</h2>
                        <p>{translations.recipesChallengesP1}</p>
                        <p>{translations.recipesChallengesP2}</p>
                        <p>{translations.recipesChallengesP3}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-20 md:grid md:grid-cols-2 md:items-center">
                    <img src={thirdImg} alt="" className=" mx-auto rounded-lg border border-border w-80 md:order-last md:w-100" />
                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                        <h2 className="font-bold font-sans text-text-main text-2xl">{translations.technologies}</h2>
                        <p>{translations.recipesTechP1}</p>
                        <p>{translations.recipesTechP2}</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <Link to="/projects/PlanB" className="font-semibold hover:text-accent">← Plan B</Link>
                    <Link to="/projects/Weather" className="font-semibold hover:text-accent">Weatherly →</Link>
                </div>
        </main>
        <Footer />
        </>
    )
    
}

export default Recipes;