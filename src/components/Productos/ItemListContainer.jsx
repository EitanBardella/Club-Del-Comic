import "./ItemListContainer.css"
// import data from "../../data/product.json"
import { useEffect, useState } from "react"
import  pedirProductos  from "../../helpers/PedirProducto"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    //Logica js
    //Promesa para traer objetos

    const [productos, setProductos] = useState([])

    // const pedirProductos = () =>{
    //     return new Promise((resolve, reject) => {
    //         resolve(data)
    //     })
    // }
    


    useEffect(() => {
        pedirProductos()
            .then((rta)=>{
                setProductos(rta);
            })
    }, [])

    return (
        <div className="container d-flex justify-content-center align-items-center">
            {productos.length > 0 ? (
                <ItemList productos={productos}></ItemList>
            ) : (
                <p>Cargando productos...</p>
            )}
        </div>
    );
};

export default ItemListContainer

