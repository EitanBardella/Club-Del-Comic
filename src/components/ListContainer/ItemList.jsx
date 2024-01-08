import Card from "./Card"

const ItemList = ({productos}) => {
    return (
        <div>
            <div className="row">
            {
                productos.length > 0 && productos.map((producto) => (
                <div className="col-md-4 text-center" key={(producto.id)}>
                    <Card 
                    titulo={(producto.nombre)} 
                    precio={(producto.precio)} 
                    imagen={(producto.imagen)} 
                    />
                </div>))
            }
            </div>
        </div>
    )
}

export default ItemList