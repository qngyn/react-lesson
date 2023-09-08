import React from "react"
import Toggle from "./Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"
import useToggle from "../hooks/useToggle"

export default function Star() {
    const [on, toggle] = useToggle()
    return  (
        // <Toggle>
        //     <Toggle.Button>
        //         <Toggle.On>
        //             <BsStarFill className="star filled" />
        //         </Toggle.On>
        //         <Toggle.Off>
        //             <BsStar className="star" />
        //         </Toggle.Off>
        //     </Toggle.Button>
        // </Toggle>
        <>
            { on ? 
                <BsStarFill className="star filled"  onClick={toggle}/> :
                <BsStar className="star"  onClick={toggle} />
            }
        </>
    )
}