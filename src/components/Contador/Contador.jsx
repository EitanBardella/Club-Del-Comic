import { useState } from "react"
import Button from 'react-bootstrap/Button';
import "./Contador.css"


const Contador = ({cartfontSize,AfontSize,Item}) => {

    const [cantidad, setCantidad]=useState(1);



    const restar=()=>{
        cantidad > 1 && setCantidad(cantidad - 1);
    }

    const sumar=()=>{
        cantidad < Item.stock && setCantidad(cantidad + 1);
    }



    return (
    <div className="Container">

        <Button variant="danger" style={{ fontSize: `${cartfontSize}px` }} >AGREGAR AL CARRITO</Button>
        <div className="Container-btns">
            <Button variant="light" onClick={sumar}  style={{ fontSize: `${AfontSize}px` }} > Agregar </Button>
            <h4 className="cantidad" > {cantidad} </h4>
            <Button variant="light" onClick={restar} className="btns"  style={{ fontSize: `${AfontSize}px` }}> Restar </Button>
        </div>

    </div>
    )
}

export default Contador

