import "./ItemDetail.css"
import Contador from '../Contador/Contador';
import img from "../../../public/NarutoTomo1.jpg"


const ItemDetail = ({item}) => {
    if (!item){ return <div>Cargando Producto</div>}

    return (
        <div className="container text-center" key={(item.id)} >
            {
                <>
                    <h1 className='name'> {item.nombre}</h1>
                    <div className='row'>
                        <div className='col' > 
                            <img className="img-detail" src={img} alt="" />
                            {/* <img src={Item.imagen} alt="Hola" /> */}
                        </div>
                        <div className='col d-flex flex-column justify-content-center gap-35'>
                            <p className='descripcion'>{item.descripcion}</p>
                            <p className='precio'>{item.precio} $</p>
                            <div className='cont'>
                                <Contador  producto = {item} cartfontSize={30} AfontSize={25} />
                                {/*La prop tiene el mismo nombre, pero distinto valor*/}
                            </div>

                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default ItemDetail;