import "./ItemDetail.css"
import Contador from '../Contador/Contador';
import img from "../../../public/NarutoTomo1.jpg"

const ItemDetail = ({Item}) => {
    if (!Item){ return <div>Cargando Producto</div>}

    return (
        <div className="container text-center" key={(Item.id)} >
            {
                <>
                    <h1 className='name'> {Item.nombre}</h1>
                    <div className='row'>
                        <div className='col' > 
                            <img className="img-detail" src={img} alt="" />
                            {/* <img src={Item.imagen} alt="Hola" /> */}
                        </div>
                        <div className='col d-flex flex-column justify-content-center gap-35'>
                            <p className='descripcion'>{Item.descripcion}</p>
                            <p className='precio'>{Item.precio} $</p>
                            <div className='cont'>
                                <Contador Item = {Item} cartfontSize={30} AfontSize={25} />
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default ItemDetail;