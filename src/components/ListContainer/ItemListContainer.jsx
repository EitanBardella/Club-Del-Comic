import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import { collection, getDocs, query, where} from "firebase/firestore";
import db from "../../db/db";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const { categoria } = useParams();

    useEffect(() => {

        // Función asincrónica para obtener los productos de Firebase
        const fetchData = async () => {
            try {
                let consulta;
                let productosRef = collection(db, "productos");

                // Si hay una categoría definida, se filtran los productos por esa categoría
                if(categoria) {
                    consulta = query(productosRef, where("categoria", "==", categoria));
                } else {
                    // Si no hay categoría definida, se obtienen todos los productos
                    consulta = productosRef;
                }

                // Se realiza la consulta a Firebase y se espera la respuesta
                const querySnapshot = await getDocs(consulta);

                // Se mapea el resultado de la consulta para obtener los datos de cada producto
                let productosDb = querySnapshot.docs.map((prod) => ({
                    id: prod.id,
                    ...prod.data()
                }));

                // Se actualiza el estado con los productos obtenidos
                setProductos(productosDb);
                // Se indica que la carga ha finalizado
                setCargando(false);
            } catch (error) {
                console.log("Error:", error);
            }
        };

        // Se llama a la función para obtener los productos cuando cambia la categoría
        fetchData();
    
    }, [categoria]);

    return (
        <div className="container d-flex justify-content-center align-items-center">
            {cargando ? (
                // Muestra un spinner de carga mientras se cargan los productos
                <div className="cargandoBox">
                    <ClockLoader color="#ff005c" loading margin={10} size={100} speedMultiplier={1.25} />
                    <p className="cargando">Tren Roca viene con Demoras</p>
                </div>
            ) : (
                // Muestra la lista de productos una vez que se han cargado
                <ItemList productos={productos}></ItemList>
            )}
        </div>
    );
};

export default ItemListContainer;



