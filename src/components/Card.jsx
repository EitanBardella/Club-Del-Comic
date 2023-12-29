import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types"

const Card = ({titulo, imagen, precio}) => {
  return (
    <div className="card">
      <img src={imagen} alt="" />
      <div className="card-body">
        <h4 className="card-tittle">{titulo}</h4>
        <p className="card-text">{precio}</p>
        <Button variant="danger" >AGREGAR AL CARRITO</Button>
      </div>
    </div>
  )
}

// Card.propTypes={
//   nombre: PropTypes.string.isRequired,
//   precio: PropTypes.number.isRequired,
//   imagen: PropTypes.string.isRequired,
// }

export default Card