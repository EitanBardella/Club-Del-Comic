import data from "../data/product.json"

const pedirProductos = () =>{
    return new Promise((resolve) => {
        setTimeout(
            () => {
                resolve(data)
            },500
        )
        
    })
}

export default pedirProductos

