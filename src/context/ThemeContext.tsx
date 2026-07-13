import { createContext, useEffect, useState } from "react"

type ThemeContextType = {
    theme: string,
    toggleTheme: () => void //funcao que não retorna nada
}

export const ThemeContext = createContext<ThemeContextType | null> (null) 
// cria o contexto dizendo que o tipo dos dados vai ser ThemeContextType ou null
// (null) — define o valor padrão como null, que é o que qualquer componente vai receber se não houver um Provider acima dele na árvore


function ThemeProvider({ children }: {children: React.ReactNode}) {

    const [theme, setTheme] = useState(localStorage.getItem("currentTheme") || "dark")

    function toggleTheme(){
        if(theme === "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }

    useEffect(() => {
        localStorage.setItem("currentTheme", theme) //theme que vem do state
        if(theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }      

    }, [theme])
    // [] — roda só uma vez, quando o componente aparece na tela. Nunca mais.
    // [theme] — roda uma vez no início, e de novo toda vez que theme mudar.


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}> 
        {/* value espera um objeto JavaScript */}
            {children}
        </ThemeContext.Provider>
    )
}



export default ThemeProvider;