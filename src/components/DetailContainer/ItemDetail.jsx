import Button from 'react-bootstrap/Button';

const ItemDetail = ({Item}) => {
    if (!Item){ return <div>Cargando Producto</div>}
    console.log(Item)

    return (
        <div className="container" key={(Item.id)} >
            {
                <>
                    <h1> {Item.nombre} </h1>
                    <div>
                        <img src={Item.imagen} alt={Item.nombre} />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, aliquid quasi sequi fugit doloremque quas perferendis illum est voluptas totam nam, sint cum nobis sit culpa neque! Beatae, perferendis nulla?</p>
                        <p> {Item.precio}$</p>
                    <Button variant="danger" >AGREGAR AL CARRITO</Button>
                    </div>
                </>
            }
        </div>
    )
}

export default ItemDetail