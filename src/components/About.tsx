import profilePhoto from "../assets/photo-1.jpg"
import { LanguageContext } from "../context/LanguageContext"
import { useContext } from "react"

function About() {

    const langContext = useContext(LanguageContext)
    
        if(!langContext) {
            return null
        }
    
        const { translations } = langContext;

    return (
        <>
        <section id="about" className="flex flex-col gap-8 py-20 px-10 max-w-6xl mx-auto w-full md:px-20">
            <h2 className="flex items-baseline gap-5 section-title font-bold font-sans text-text-main text-2xl"><span className="text-accent text-sm font-mono font-bold">01</span>{translations.about}</h2>
            <h3 className="font-display text-accent text-3xl font-semibold md:px-10">{translations.whoIAm}</h3>
            
            <div className="flex flex-col gap-5 md:grid md:grid-cols-[1fr_200px] md:gap-8 md:items-start md:px-10">
                <p className="font-bold border-l-2 border-accent pl-5">
                {translations.aboutP1}
                </p>
                <div className="self-center photo-glow w-55 my-5 md:row-span-2 lg:w-64">
                    <img src={profilePhoto} alt="Bruna Pessoa" className="rounded-2xl w-full"/>
                </div>
                <div className="flex flex-col gap-5">
                    <p>{translations.aboutP2}
                    </p>
                    <p>
                    {translations.aboutP3}
                    </p>
                    <p>
                    {translations.aboutP4}
                    </p>
                </div>
            </div>
            <h3 className="font-display text-accent text-3xl font-semibold md:px-10">{translations.myJourney}</h3>

            <div className="flex flex-col gap-5 md:grid md:grid-cols-[200px_1fr] md:gap-x-15 md:gap-y-5 md:items-start lg:grid-cols-[260px_1fr] md:px-10">
           
                <p>{translations.myJourneyP1} 
                </p>
                <div className="self-center photo-glow w-55 my-5 md:row-span-2 md:order-first lg:w-64">
                    <img src={profilePhoto} alt="Bruna Pessoa" className="rounded-2xl w-full"/>
                </div>
                <div className="flex flex-col gap-5 md:col-start-2">
                    <p>
                    {translations.myJourneyP2} 
                    </p>
                    <p>
                    {translations.myJourneyP3} 
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-start">
                <span className="bg-bg-card border border-border py-2 px-4 rounded-full my-2 mx-2 hover:border-accent hover:text-text-main">HTML5</span>
                <span className="bg-bg-card border border-border py-2 px-4 rounded-full my-2 mx-2 hover:border-accent hover:text-text-main">CSS3</span>
                <span className="bg-bg-card border border-border py-2 px-4 rounded-full my-2 mx-2 hover:border-accent hover:text-text-main">JavaScript</span>
                <span className="bg-bg-card border border-border py-2 px-4 rounded-full my-2 mx-2 hover:border-accent hover:text-text-main">React</span>
                <span className="bg-bg-card border border-border py-2 px-4 rounded-full my-2 mx-2 hover:border-accent hover:text-text-main">Tailwind</span>
                <span className="bg-bg-card border border-border py-2 px-4 rounded-full my-2 mx-2 hover:border-accent hover:text-text-main">TypeScript</span>
                <span className="bg-bg-card border border-border py-2 px-4 rounded-full my-2 mx-2 hover:border-accent hover:text-text-main">Git | GitHub</span>
                </div>

        </section>
        </>
    )
}

export default About;