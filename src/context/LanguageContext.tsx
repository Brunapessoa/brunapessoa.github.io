import { createContext, useEffect, useState } from "react"
import en from "../locales/en.json"
import pt from "../locales/pt.json"
import nl from "../locales/nl.json"

type languageContextType = {
    language: string,
    setLanguage: (lang: string) => void,
    translations: { [key:string]: string }
}

export const LanguageContext = createContext<languageContextType | null> (null) 

function LanguageProvider({ children }: {children: React.ReactNode}) {

    const [language, setLanguage] = useState(localStorage.getItem("currentLang") || 'en');

    const translationsMap = { en, pt, nl}

    const translations = translationsMap[language as keyof typeof translationsMap]

    // console.log(language)


    useEffect(() => {
        localStorage.setItem("currentLang", language);

    }, [language])

    return(
        <LanguageContext.Provider value={{language, setLanguage, translations}}>
            {children}
        </LanguageContext.Provider>

    )
}

export default LanguageProvider;