import Button from 'react-bootstrap/Button';
import "./ItemDetail.css"

const ItemDetail = ({Item}) => {
    if (!Item){ return <div>Cargando Producto</div>}

    return (
        <div className="container text-center" key={(Item.id)} >
            {
                <>
                    <h1 className='name'> {Item.nombre}</h1>
                    <div className='row'>
                        <div className='col' > 
                            <img src={Item.imagen} alt="Hola" />
                        </div>
                        <div className='col'>
                            <p className='descripcion'>{Item.descripcion}</p>
                            <p className='precio'>{Item.precio}</p>
                        </div>
                        <div className='row-auto'>
                            <Button variant="danger" className='btn'>AGREGAR AL CARRITO</Button>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default ItemDetail;