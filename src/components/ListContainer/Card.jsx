import "./Card.css"
import "../../data/product.json"
import {Link} from "react-router-dom"
import Contador from '../Contador/Contador';


const Card = ({producto}) => {
  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.nombre} />
      <div className="card-body">
        <h4 className="card-tittle"><Link to={`/Item/${producto.id} `} className='Link'>{producto.nombre}</Link></h4>
        <p className="card-text">{producto.precio}$</p>
        <Contador cartfontSize={20} AfontSize={18}/>
      </div>
    </div>
  )
}



export default Card