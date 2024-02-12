import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"
import {doc, getDoc} from "firebase/firestore"
import db from "../../db/db";
const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({})
    const {id} = useParams();
    
    useEffect(() => {
        setTimeout(()=>{
            //3 argumentos: Base de datos, coleccion, id producto
            const productoRef= doc(db,"productos", id)
            getDoc(productoRef).then((rta)=>{
                const productoDb={id: rta.id, ...rta.data()}
                setItem(productoDb)
        })
        },500)
    }, [id])

    return (
        <div className="">

            {item && <ItemDetail item={item}  />}

        </div>
    )
}

export default ItemDetailContainer