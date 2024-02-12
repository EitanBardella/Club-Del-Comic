import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { ImCross } from "react-icons/im";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import "./Carrito.css"

const Carrito = () => {
  const { cart, clearProducto, clear, precioTotal,} = useContext(CartContext);

const pagar = () => {
  Swal.fire({
    title: "Estas seguro?",
    text: "No vas a poder revertirlo!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Estoy Seguro!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "GENIAL!",
        text: "Tu compra fue realizada con exito",
        icon: "success"
      });
    }
  });
};

  return (
    <div className="cartView" >
      <div   >
        {cart.map((producto) => (
          <div className="cartViewContent" key={producto.id}>
            <div className="img-card">
              <img className="img" src={producto.imagen} alt={producto.nombre} />
            </div>

            <h3 className="cartName"> {producto.nombre} </h3>
            <h4 className="cartCount">Cantidad: {producto.cantidad} </h4>
            
            <h4 className="cartPrice"> Precio c/u: {producto.precio} </h4>
            <ImCross onClick={() => clearProducto(producto.id)} className="clearProd"/>

          </div>
        ))}
      </div>
      <div className="cartTotalPrice">
        <h2 className="totalPrice">Precio Total: {precioTotal()} </h2>

        <div className="viewButton">
          <button onClick={clear}>Limpiar Carrito</button>
          <button onClick={pagar}>PAGAR</button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;




