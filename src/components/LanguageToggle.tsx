import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

function LanguageToggle() {

    const langContext = useContext(LanguageContext)

    if(!langContext){
        return null
    }

    const { setLanguage } = langContext

    return(
        <div className="flex gap-3">
            <button onClick={() => setLanguage("pt")} className="cursor-pointer">🇧🇷</button>
            <button onClick={() => setLanguage("en")} className="cursor-pointer">🇬🇧</button>
            <button onClick={() => setLanguage("nl")} className="cursor-pointer">🇳🇱</button>
        </div>
    )

}

export default LanguageToggle