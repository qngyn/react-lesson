import React, { useContext } from "react"
// import Toggle from "../Toggle/index"
import Menu, { MenuContext } from "./Menu"
export default function MenuDropdown({ children }) {
    const { open, onToggle } = useContext(MenuContext)
    return (
        <>
            {open ? (
                <div className="menu-dropdown">
                    {children}
                </div>
            ) : null
            }
        </>
    )
}

// <Toggle.On>
//     <div className="menu-dropdown">
//         {children}
//     </div>
// </Toggle.On>