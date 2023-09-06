import React, {useContext} from "react"
import {ThemeContext} from "./App"

export default function Button() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    console.log(theme)
    return (
        <button onClick= {toggleTheme} className={`${theme}-theme`}>
            Switch Theme
        </button>
    )
}