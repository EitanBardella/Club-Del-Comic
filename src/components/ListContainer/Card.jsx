import "./Card.css"
import "../../data/product.json"
import {Link} from "react-router-dom"
import Contador from '../Contador/Contador';
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

//Le paso el array de productos a traves de una prop
const Card = ({producto}) => {

  const { agregarProducto,  } = useContext(CartContext);
  //Funcion para añadir producto del contador
  const agregar = (contador) => {
      // Crear un objeto con el producto y la cantidad seleccionada
      const productoAgregado = { ...producto, cantidad: contador };
      agregarProducto(productoAgregado);
  }
  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.nombre}  />
      <div className="card-body">
        <h4 className="card-tittle"><Link to={`/Item/${producto.id} `} className='Link'>{producto.nombre}</Link></h4>
        <p className="card-text">{producto.precio}$</p>
        <Contador producto={producto} cartfontSize={20} afontSize={18} agregar={agregar}/>
        
      </div>
    </div>
  )
}



export default Card