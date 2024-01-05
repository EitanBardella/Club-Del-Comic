import { element } from "prop-types"
import data from "../data/product.json"

const pedirProductos = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                resolve(data)
            },500
        )
        
    })
}

export default pedirProductos

