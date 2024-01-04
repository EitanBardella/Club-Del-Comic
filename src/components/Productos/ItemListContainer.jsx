import Card from "./Card"
import "./ItemListContainer.css"
import data from "../../data/product.json"
import { useEffect, useState } from "react"


const ItemListContainer = () => {
    //Logica js
    //Promesa para traer objetos

    const [productos, setProductos] = useState([])

    const pedirProductos = () =>{
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }

    useEffect(() => {
        pedirProductos()
            .then((rta)=>{
                setProductos(rta);
            })
    }, [])

    return (
        <div className="container d-flex justify-content-center aling-items-center">
            <div className="row">
            {
            productos.length > 0 && 
            productos.map(producto => (
                <div className="col-md-4 text-center" key={(producto.id)}>
                    <Card titulo={(producto.nombre)} imagen={(producto.imagen)} precio={(producto.precio)} />
                </div>))
            }
            </div>
        </div>
    )
}

export default ItemListContainer

