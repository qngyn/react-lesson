import React from "react"
import Button from "../Button/Button.js"

export default function MenuButton({ children, toggle }) {
    return (
        <Button onClick= {toggle}>{children}</Button>
    )
}