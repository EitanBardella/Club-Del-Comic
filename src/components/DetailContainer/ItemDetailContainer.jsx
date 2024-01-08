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
            pedirItemPorId(Number(id))
                .then((rta) => {
                    console.log(rta)
                    setItem(rta)
                })
        }, 2000);
    }, [id])

    return (
        <div>

            {Item && <ItemDetail Item= {Item}  />}

        </div>
    )
}

export default ItemDetailContainer