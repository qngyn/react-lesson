import React, {Children, cloneElement} from "react"


export default function Menu({children}) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <div className="menu">
            {Children.map(children, (child) => {
                return cloneElement(child, {
                    open, 
                    toggle
                })
            })}
        </div>
    )
}
/* short hand for open: open, toggle: toggle */
