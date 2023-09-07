import React, {useContext} from "react"
import Button from "../Button/Button.js"
import { MenuContext } from "./Menu.js"
export default function MenuButton({ children, }) {
    const {toggle} = useContext(MenuContext)

    return (
        <Button onClick={toggle}>{children}</Button>
    )
}