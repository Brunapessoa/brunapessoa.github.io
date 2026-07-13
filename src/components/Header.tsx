import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import LanguageToggle from "./LanguageToggle"
import { LanguageContext } from "../context/LanguageContext"

function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    const location = useLocation()


    function closeMenuHamb(){
            setMenuOpen(false)
    }

    useEffect(()=> {
        document.addEventListener("click", closeMenuHamb)

        return () => {
            document.removeEventListener("click", closeMenuHamb)
        }

    }, []
    )  

    const langContext = useContext(LanguageContext)

    if(!langContext) {
        return null
    }

    const { translations } = langContext

    return (        
        <header className="flex flex-row justify-between p-5">
            <div className="flex flex-row items-center gap-5">
                <h1>BP</h1>
                {location.pathname === "/" && (
                <>
                <button onClick={(event) => {event.stopPropagation(); setMenuOpen(!menuOpen)}}
                    className="lg:hidden">Burg</button>
                {menuOpen && <nav className="lg:hidden">
                    <ul className="flex flex-col py-3 px-2">
                        <li onClick={() => setMenuOpen(false)} className="p-2">
                            <a href="#about">{translations.about}</a>
                        </li>
                        <li onClick={() => setMenuOpen(false)} className="p-2">
                            <a href="#projects">{translations.projects}</a>
                        </li>
                        <li onClick={() => setMenuOpen(false)} className="p-2">
                            <a href="#contact">{translations.contact}</a>
                        </li>
                    </ul>
                </nav>}
                
                <nav className="hidden lg:flex " >
                    <ul className="flex flex-row px-2 gap-2 list-disc list-inside">
                        <li onClick={() => setMenuOpen(false)} className="p-2">
                            <a href="#about">{translations.about}</a>
                        </li>
                        <li onClick={() => setMenuOpen(false)} className="p-2">
                            <a href="#projects">{translations.projects}</a>
                        </li>
                        <li onClick={() => setMenuOpen(false)} className="p-2">
                            <a href="#contact">{translations.contact}</a>
                        </li>
                    </ul>
                </nav>              
                </>    
            )} 
            </div>        
                
            <div id="languages" className="flex gap-5">
                <LanguageToggle />         
                <ThemeToggle />
            </div>
        </header>
        
    )
}

export default Header