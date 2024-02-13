import {  useState } from "react"
import Button from 'react-bootstrap/Button';
import "./Contador.css"


const Contador = ({cartfontSize,afontSize, producto,agregar}) => {
    //Preguntar pq aca no resive Producto?
    const [cantidad, setCantidad]=useState(1);

    // const {cart, setCart} = useContext(CartContext);
    // console.log(cart)

    const restar=()=>{
        cantidad > 1 && setCantidad(cantidad - 1);
    }

    const sumar=()=>{
        cantidad < (producto.stock) && setCantidad(cantidad + 1);
    }



    return (
    <div className="Container">

        <Button variant="danger" onClick={()=>agregar(cantidad)} style={{ fontSize: `${cartfontSize}px` }} >AGREGAR AL CARRITO</Button>
        <div className="Container-btns">
            <Button variant="light" onClick={sumar}  style={{ fontSize: `${afontSize}px` }} > Agregar </Button>
            <h4 className="cantidad" > {cantidad} </h4>
            <Button variant="light" onClick={restar} className="btns"  style={{ fontSize: `${afontSize}px` }}> Restar </Button>
        </div>

    </div>
    )
}

export default Contador

