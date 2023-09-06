import React, {useContext} from "react"
import { ThemeContext } from "./App"

export default function Header() {
    const {theme, toggleTheme} =useContext(ThemeContext)
    
    return (
        <header className={`${theme}-theme`}>
            <h1>{theme === "light" ? "Light" : "Dark"} Theme</h1>
        </header>
    )
}