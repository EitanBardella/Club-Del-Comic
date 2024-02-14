import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Obtener la referencia al documento del producto
                const productoRef = doc(db, "productos", id);
                
                // Obtener el documento del producto desde Firestore
                const productoSnapshot = await getDoc(productoRef);
                
                // Verificar si el documento existe antes de continuar
                if (productoSnapshot.exists()) {
                    // Construir el objeto del producto con el ID y los datos
                    const productoDb = { id: productoSnapshot.id, ...productoSnapshot.data() };
                    
                    // Establecer el estado del producto
                    setItem(productoDb);
                } else {
                    console.log("El producto no existe");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        // Llamar a la función para obtener los detalles del producto cuando cambie el ID
        fetchData();
    }, [id]);

    return (
        <div className="">
            {/* Renderizar el componente ItemDetail solo si hay datos del producto */}
            {item && <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;
