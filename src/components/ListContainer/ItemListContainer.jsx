import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import pedirProductos from "../../helpers/PedirProducto";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { ClockLoader } from "react-spinners";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const { categoria } = useParams();

    useEffect(() => {
        
        const fetchData = () => {
        setCargando(true);

        pedirProductos().then((rta) => {
            if (categoria) {
            const prodsFiltrados = rta.filter(
                (producto) => producto.categoria === categoria
            );
            setProductos(prodsFiltrados);
            } else {
            setProductos(rta);
            }
            //Simular mas tiempo de carga
            setTimeout(() => {
                setCargando(false);
            }, 2000);
        });
        };

        fetchData();
    }, [categoria]);

    return (
        <div className="container d-flex justify-content-center align-items-center">
            {cargando ? (
            <div className="cargandoBox">
                <ClockLoader color="#ff005c" loading margin={10} size={100} speedMultiplier={1.25} />
                <p className="cargando">Tren Roca viene con Demoras</p>
            </div>
            ) : (
            <ItemList productos={productos}></ItemList>
            )}

        </div>
    );
};

export default ItemListContainer;





// useEffect(() => {
//     pedirProductos()
//     //En rta esta el array de productos traido con la promesa
//     .then((rta)=>{
//         if(categoria){
//             //Filtrar los productos que coincidan
//             //Filter=> Por cada iteracion me devuelve un producto
//             const prodsFiltrados = rta.filter((producto) => producto.categoria === categoria)
//             //Se guarda los prods filtrados en la funcion de estado
//             setProductos(prodsFiltrados)
//         } else{
//             //Mostrar la lista sin cambios
//             setProductos(rta)
//         }
//     })
//     .finally (()=> {
//         setCargando(false)
//     })
// }, [categoria])




// return (
//     <div className="container d-flex justify-content-center align-items-center">
//         {productos.length > 0 ? (
//             <ItemList productos={productos}></ItemList>
//         ) : (
//             <div className="cargandoBox" >
                
//                 <ClockLoader color="#ff005c" loading margin={10} size={100} speedMultiplier={1.25}/>
//                 <p className="cargando">Tren Roca viene con Demoras</p>
//             </div>
//         )}
//     </div>
// );
// };