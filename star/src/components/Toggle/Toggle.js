import React, {createContext, useRef} from "react"
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate"
import useToggle from "../../hooks/useToggle"
const ToggleContext = createContext()

export default function Toggle({ children, onToggle = () => {}}) {
    // const [on, setOn] = useState(false)
    const firstRender = useRef(true)
    const [on, toggle] = useToggle()

    // function toggle() {
    //     setOn(prevOn => !prevOn)
    // }
    
    useEffectOnUpdate(onToggle, [on])
    
    // useEffect(() => {
    //     if (firstRender.current) {
    //         firstRender.current = false 
    //     } else {
    //         onToggle()
    //     }
    // }, [on])

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext }