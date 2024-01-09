import { useState } from "react"
import Button from 'react-bootstrap/Button';
import "./Prueba.css"


const Prueba = () => {
    
    const [contador, setContador]=useState(0);

    const sumar=()=>{
        setContador(contador+1);
    }

    const restar=()=>{
        setContador(contador-1);
    }
    


    return (
    <div className="Container">
        <Button variant="light" onClick={sumar} > Agregar </Button>
        {/* <p> {contador} </p> */}
        <Button variant="light" onClick={restar} > Restar </Button>
    </div>
    )
}

export default Prueba
