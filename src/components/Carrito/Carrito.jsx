import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { ImCross } from "react-icons/im";
import "./Carrito.css";
import { Link } from "react-router-dom";
import { ImSad2 } from "react-icons/im";

const Carrito = () => {
  const { cart, clearProducto, clear, precioTotal } = useContext(CartContext);

  return (
    <div className="cartView">
      {cart.length === 0 ? (
        <div className="emptyCart">
          <div className="emptyCartTitle">
            <h1>Carrito Vacio</h1>
            <ImSad2 className="sadiconCart"/>
          </div>
          <img className="emptyCartImg" src="/kaguya.jpeg"/>
        </div>
      ) : (
        <>
          <div>
            {cart.map((producto) => (
              <div className="cartViewContent" key={producto.id}>
                <div className="img-card">
                  <img className="img" src={producto.imagen} alt={producto.nombre} />
                </div>
                <h3 className="cartName"> {producto.nombre} </h3>
                <h4 className="cartCount">Cantidad: {producto.cantidad} </h4>
                <h4 className="cartPrice"> Precio c/u: {producto.precio} </h4>
                <ImCross onClick={() => clearProducto(producto.id)} className="clearProd" />
              </div>
            ))}
          </div>
          <div className="cartTotalPrice">
            <h2 className="totalPrice">Precio Total: {precioTotal()} </h2>
            <div className="viewButton">
              <button onClick={clear}>Limpiar Carrito</button>
              <Link to="/pagar" target="_self"><button>PAGAR</button></Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;






