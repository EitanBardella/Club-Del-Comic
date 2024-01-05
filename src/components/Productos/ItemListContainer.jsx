import "./ItemListContainer.css"
// import data from "../../data/product.json"
import { useEffect, useState } from "react"
import  pedirProductos  from "../../helpers/PedirProducto"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    //Logica js
    //Promesa para traer objetos

    const [productos, setProductos] = useState([])


    useEffect(() => {
        setTimeout(() => {
            pedirProductos()
            .then((rta)=>{
                setProductos(rta);
            })
        }, 2000);
        
    }, [])

    return (
        <div className="container d-flex justify-content-center align-items-center">
            {productos.length > 0 ? (
                <ItemList productos={productos}></ItemList>
            ) : (
                <p className="cargando">Cargando productos...</p>
            )}
        </div>
    );
};

export default ItemListContainer

