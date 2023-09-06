import React from "react"

export default function MenuDropdown({ children, ...props }) {
    console.log(props)
    return props.open ? (
        <div className="menu-dropdown">
            {children}
        </div>
    ) : null
}