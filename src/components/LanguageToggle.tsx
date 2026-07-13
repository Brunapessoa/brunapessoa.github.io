import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

function LanguageToggle() {

    const langContext = useContext(LanguageContext)

    if(!langContext){
        return null
    }

    const { setLanguage } = langContext

    return(
        <>
            <button onClick={() => setLanguage("pt")}>PT</button>
            <button onClick={() => setLanguage("en")}>EN</button>
            <button onClick={() => setLanguage("nl")}>NL</button>
        </>
    )

}

export default LanguageToggle