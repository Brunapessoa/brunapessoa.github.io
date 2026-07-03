import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

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
                            <a href="#about">About me</a>
                        </li>
                        <li onClick={() => setMenuOpen(false)} className="p-2">
                            <a href="#projects">Projects</a>
                        </li>
                        <li onClick={() => setMenuOpen(false)} className="p-2">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>}
                
                <nav className="hidden lg:flex " >
                    <ul className="flex flex-row px-2 gap-2 list-disc list-inside">
                        <li onClick={() => setMenuOpen(false)} className="p-2">
                            <a href="#about">About me</a>
                        </li>
                        <li onClick={() => setMenuOpen(false)} className="p-2">
                            <a href="#projects">Projects</a>
                        </li>
                        <li onClick={() => setMenuOpen(false)} className="p-2">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>              
                </>    
            )} 
            </div>        
                
            <div className="flex flex-row gap-5" >
                <div id="languages" className="flex gap-5">
                    <button>PT</button>
                    <button>EN</button>
                    <button>NL</button>
                </div>
                <button>Theme</button>
            </div>
        </header>
        
    )
}

export default Header