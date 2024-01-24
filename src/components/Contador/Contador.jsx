import { useState } from "react"
import Button from 'react-bootstrap/Button';
import "./Contador.css"


const Contador = ({cartfontSize,AfontSize, producto}) => {
    //Preguntar pq aca no resive Producto?
    const [cantidad, setCantidad]=useState(1);



    const restar=()=>{
        cantidad > 1 && setCantidad(cantidad - 1);
        console.log("restar")
    }

    const sumar=()=>{
        cantidad < (producto.stock) && setCantidad(cantidad + 1);
        console.log("agregar")
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

