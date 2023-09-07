import React from "react"
import Button from "../Button/Button.js"
import Toggle from "../Toggle/index.js"
export default function MenuButton({ children}) {
    return (
        <Toggle.Button> 
            <Button>{children}</Button>
        </Toggle.Button>
    )
}