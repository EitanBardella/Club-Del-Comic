import { useEffect, useState } from "react";
import pedirItemPorId from "../../helpers/PedirItemId"
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"


const ItemDetailContainer = () => {
    
    const [Item, setItem] = useState({})
    const {id} = useParams();
    
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
        <div className="">

            {Item && <ItemDetail Item={Item}  />}

        </div>
    )
}

export default ItemDetailContainer