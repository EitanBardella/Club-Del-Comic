import { useEffect, useState } from "react";
import pedirItemPorId from "../../helpers/PedirProducto"
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"


const ItemDetailContainer = ({ItemId}) => {
    
    const [Item, setItem] = useState({})
    const id = useParams().id;
    console.log(id)
    
    useEffect(() => {
        setTimeout(() => {
            pedirItemPorId(Number(ItemId))
                .then((rta) => {
                    console.log(rta)
                    setItem(rta)
                })
        }, 2000);
    }, [ItemId])

    return (
        <div className="">

            {Item && <ItemDetail Item= {Item}  />}

        </div>
    )
}

export default ItemDetailContainer