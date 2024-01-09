import "./Itemfaq.css"
import { useState, useEffect, useRef } from "react"
import Chevron from "../../assets/chevron.svg"

const Itemfaq = ( {pregunta, respuesta} ) => {
    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

    useEffect(() => {
        console.log(refHeight);
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    console.log(toggle);
    return (
        <div className="accordion">
                <button onClick={toggleState} className="accordion-visible">
                    <span>{pregunta}</span>
                    <img className={toggle && "active"} src={Chevron} />
                </button>
                
                <div  className={toggle ? "accordion-toggle animated" : "accordion-toggle"} style={{height: toggle ? `${heightEl}` : "0px"}} ref={refHeight}>
                    <p aria-hidden={toggle ? "true" : "false"}>{respuesta}</p>
                </div>
        </div>
    )
}

export default Itemfaq