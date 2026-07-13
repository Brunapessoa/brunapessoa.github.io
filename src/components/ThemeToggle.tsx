import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function ThemeToggle() {

    const themeContext = useContext(ThemeContext)

    if(!themeContext) {
        // Se o contexto não existir (porque não tem um Provider acima), não renderiza este elemento. apenas seguranca para o TS, pq ThemeProvider está no main.tsx envolvendo tudo, o contextData nunca vai ser null.
        return null
    }

    const { theme, toggleTheme } = themeContext
    return (
        <>
            <button onClick={toggleTheme}>{theme}</button>
        </>
    )

}

export default ThemeToggle