import { useState } from "react"


const Prueba = () => {
    
    const [contador, setContador]=useState(0);
    const sumar=()=>{
        setContador(contador+1);
    }
    const restar=()=>{
        setContador(contador-1);
    }
    return (
    <div>
        <p>Carrito {contador} </p>
        <button onClick={sumar} > Agregar </button>
        <button onClick={restar} > Restar </button>
    </div>
    )
}

export default Prueba
