import { useEffect, useState } from "react";
import pedirItemPorId from "../../helpers/PedirProducto"
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = ({ItemId}) => {
    
    const [Item, setItem] = useState({}) 
    
    useEffect(() => {
        setTimeout(() => {
            pedirItemPorId(ItemId)
                .then((rta) => {
                    console.log(rta)
                    setItem(rta)
                })
        }, 2000);
    }, [ItemId])

    return (
        <div>

            {Item && <ItemDetail Item= {2}  />}

        </div>
    )
}

export default ItemDetailContainer