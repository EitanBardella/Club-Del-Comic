import{useContext } from "react"
import { CartContext } from "../../Context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

import "./CartWidget.css";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const { cantidadTotal} = useContext(CartContext);
    const totalCantidad = cantidadTotal();
    return (
        <>
            <Link className="navegacion" target="_self" to="/carrito">
                <div className="cartt" >
                    <FaShoppingCart className="cart" />
                    <p>{totalCantidad}</p>
                </div>
            </Link>
        </>
    );
};

export default CartWidget;
