import React, {Children, cloneElement, createContext} from "react"

const MenuContext = createContext()
export default function Menu({children}) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <MenuContext.Provider value={true}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export { MenuContext }
/* short hand for open: open, toggle: toggle */
