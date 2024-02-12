import "./ItemDetail.css"
import Contador from '../Contador/Contador';
import { useContext } from "react";
import {CartContext} from "../../Context/CartContext"



const ItemDetail = ({item}) => {
    //Contexto
    const { agregarProducto,  } = useContext(CartContext);
    //Funcion para añadir producto del contador
    const agregar = (contador) => {
        // Crear un objeto con el producto y la cantidad seleccionada
        const productoAgregado = { ...item, cantidad: contador };
        agregarProducto(productoAgregado);
        
    }
    


    return (
        <div className="container text-center" key={(item.id)} >
            {!item ? (<div>Cargando Producto</div>) :
            (                
                <>
                    <h1 className='name'> {item.nombre}</h1>
                    <div className='row'>
                        <div className='col' > 
                            <img className="img-detail" src={item.imagen} alt="Hola" />
                        </div>
                        <div className='col d-flex flex-column justify-content-center gap-35'>
                            <p className='descripcion'>{item.descripcion}</p>
                            <p className='precio'>{item.precio} $</p>
                            <div className='cont'>
                                <Contador agregar={agregar} producto = {item} cartfontSize={30} AfontSize={25} />
                                {/*La prop tiene el mismo nombre, pero distinto valor*/}
                            </div>

                        </div>
                    </div>
                </>
            )
            }
        </div>
    )
}

export default ItemDetail;