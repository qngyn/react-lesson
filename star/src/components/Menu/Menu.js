import React, { createContext } from "react"
// import Toggle from "../Toggle/index"
import useToggle from "../../hooks/useToggle"

const MenuContext = createContext()
export default function Menu({ children, onOpen }) { 
    const [open, toggleOpen] = useToggle()
    return (
        <MenuContext.Provider value = {{open, toggleOpen}}>
             <div className="menu">
               {children}
            </div>

        </MenuContext.Provider>
    )
}

export {MenuContext}

// <Toggle onToggle={onOpen}> 
//     <div className="menu">
//         {children}
//     </div>
// </Toggle>
