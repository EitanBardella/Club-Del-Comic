import data from "../data/product.json"

const pedirItemPorId = (id) =>{

    return new Promise((resolve, reject) => {
        
        const Item = data.find((element) => element.id === id);

        if (Item){
            resolve(Item)
        } else {
            reject({
                error:"No se encontro el producto"
            })
        }

    })

}

export default pedirItemPorId