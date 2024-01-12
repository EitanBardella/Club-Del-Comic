import Button from 'react-bootstrap/Button';
import "./Card.css"
import "../../data/product.json"
import {Link} from "react-router-dom"


const Card = ({producto}) => {
  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.nombre} />
      <div className="card-body">
        <h4 className="card-tittle"><Link to={`/Item/${producto.id} `} className='Link'>{producto.nombre}</Link></h4>
        <p className="card-text">{producto.precio}$</p>
        <Button variant="danger" >AGREGAR AL CARRITO</Button>
      </div>
    </div>
  )
}



export default Card