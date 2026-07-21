import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

function Hero() {

        const langContext = useContext(LanguageContext)
        
            if(!langContext) {
                return null
            }
        
            const { translations } = langContext;
    return (
        <div className="flex flex-col gap-5 py-25 text-center max-w-6xl mx-auto w-full lg:self-start lg:ml-[25%] lg:max-w-lg lg:py-30">
            <h1 className="font-display text-5xl font-semibold text-gradient-hero lg:text-7xl">Bruna Pessoa</h1>
            <h2 className="text-text-muted text-lg font-bold">{translations.descHero}</h2>
            <p className="text-text-muted">📍 {translations.EindhvNL}</p>
        </div>
    )
}

export default Hero;