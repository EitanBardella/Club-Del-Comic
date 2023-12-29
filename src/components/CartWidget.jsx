import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css"

const CartWidget = ({cantidad}) => {
    return (
    <div><FaShoppingCart className="cart" />{cantidad}</div>
    )
}

export default CartWidget