import Button from 'react-bootstrap/Button';
import "./ItemDetail.css"

const ItemDetail = ({Item}) => {
    if (!Item){ return <div>Cargando Producto</div>}
    console.log(Item)

    return (
        <div className="container text-center" key={(Item.id)} >
            {
                <>
                    <h1 className='name'> Hola </h1>
                    <div className='row'>
                        <div className='col' > 
                            <img src={Item.imagen} alt="Hola" />
                        </div>
                        <div className='col'>
                            <p className='descripcion'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, aliquid quasi sequi fugit doloremque quas perferendis illum est voluptas totam nam, sint cum nobis sit culpa neque! Beatae, perferendis nulla?</p>
                            <p className='precio'> 4808$</p>
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