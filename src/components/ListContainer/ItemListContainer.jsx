import "./ItemListContainer.css"
// import data from "../../data/product.json"
import { useEffect, useState } from "react"
import  pedirProductos  from "../../helpers/PedirProducto"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import {ClockLoader} from "react-spinners"

const ItemListContainer = () => {
    //Logica js
    //Promesa para traer objetos

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true);

    const {categoria} = useParams()

    console.log(categoria)
    useEffect(() => {
        setTimeout(() => {
            pedirProductos()
            //En rta esta el array de productos traido con la promesa
            .then((rta)=>{
                if(categoria){
                    //Filtrar los productos que coincidan
                    //Filter=> Por cada iteracion me devuelve un producto
                    const prodsFiltrados = rta.filter((producto) => producto.categoria === categoria)
                    //Se guarda los prods filtrados en la funcion de estado
                    setProductos(prodsFiltrados)
                } else{
                    //Mostrar la lista sin cambios
                    setProductos(rta)
                }
            })
            .finally (()=> {
                setCargando(false)
            })
        }, 2000);
        
    }, [categoria])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await pedirProductos();
    //             setProductos(data);
    //         } catch (error) {
    //             console.error("Error fetching data: ", error);
    //         }
    //         };
        
    //         fetchData();
    //     }, []);

    return (
        //Abu
        //Contenedor de la lista de productos que a pasa el .json a traves del productos del useState
        <div className="container d-flex justify-content-center align-items-center">
            {productos.length > 0 ? (
                <ItemList productos={productos}></ItemList>
            ) : (
                <div className="cargandoBox" >
                    
                    <ClockLoader color="#ff005c" loading margin={10} size={100} speedMultiplier={1.25}/>
                    <p className="cargando">Tren Roca viene con Demoras</p>
                </div>
            )}
        </div>
    );
};

export default ItemListContainer

