import data from "../data/product.json"

const pedirItemPorId = (id) =>{

    return new Promise((resolve, reject) => {
        console.log(JSON.parse(data))
        const item = data.find((element) => element.id === id);
        console.log(item)
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