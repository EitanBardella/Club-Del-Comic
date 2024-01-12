import data from "../data/product.json"

const pedirItemPorId = (id) =>{
    return new Promise((resolve, reject) => {
        const item = data.find((element) => element.id === id);
        if (item){
            resolve(item)
        } else {
            reject({
                error:"No se encontro el producto"
            })
        }

    })

}

export default pedirItemPorId