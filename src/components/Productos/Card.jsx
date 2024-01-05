import Button from 'react-bootstrap/Button';
import "./Card.css"
import "../../data/product.json"


const Card = ({imagen, titulo, precio}) => {
  return (
    <div className="card">
      <img src={imagen} alt={titulo} />
      <div className="card-body">
        <h4 className="card-tittle">{titulo}</h4>
        <p className="card-text">{precio}$</p>
        <Button variant="danger" >AGREGAR AL CARRITO</Button>
      </div>
    </div>
  )
}



export default Card