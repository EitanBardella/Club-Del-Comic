import data from "../data/product.json"

const pedirProductos = () =>{
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

export default pedirProductos
