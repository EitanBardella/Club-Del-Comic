import { useEffect, useState } from "react";
import pedirItemPorId from "../../helpers/PedirItemId"
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"


const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({})
    const {id} = useParams();
    
    useEffect(() => {
        setTimeout(() => {
            pedirItemPorId(Number(id))
                .then((rta) => {
                    console.log(rta)
                    setItem(rta)
                })
        }, 500);
    }, [id])

    return (
        <div className="">

            {item && <ItemDetail item={item}  />}

        </div>
    )
}

export default ItemDetailContainer