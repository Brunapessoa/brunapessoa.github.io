import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Moon, Sun } from 'lucide-react'

function ThemeToggle() {

    const themeContext = useContext(ThemeContext)

    if(!themeContext) {
        // Se o contexto não existir (porque não tem um Provider acima), não renderiza este elemento. apenas seguranca para o TS, pq ThemeProvider está no main.tsx envolvendo tudo, o contextData nunca vai ser null.
        return null
    }
    
    
    const { theme, toggleTheme } = themeContext

    let themeIcon;

    if(theme === "dark") {
        themeIcon = <Sun size={22}/>
    } else {
        themeIcon = <Moon size={22}/>
    }

    return (
        <>
            <button onClick={toggleTheme} className="cursor-pointer border border-border rounded-lg p-1 hover:border-accent">{themeIcon}</button>
        </>
    )

}

export default ThemeToggle