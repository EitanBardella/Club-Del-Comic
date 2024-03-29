import Card from "./Card"


const ItemList = ( {productos}) => {
    return (
        <div>
            <div className="row">
            {productos.map((prods) =>  
                <div className="col-md-4 text-center" key={prods.id} >
                    <Card producto={prods} key={prods.id} />
                </div>
            )}
            </div>
        </div>
    )
}

export default ItemList

