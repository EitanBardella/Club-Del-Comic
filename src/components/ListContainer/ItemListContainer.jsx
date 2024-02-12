import "./ItemListContainer.css";
import { useEffect, useState } from "react";
// import pedirProductos from "../../helpers/PedirProducto";
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

        
        let consulta //Inicia vacio

        //El primer argumento es la base de datos y el segundo el nombre de la coleccion
        let productosRef = collection(db, "productos")
        //El filtro de categoria es con query y where

        if(categoria){
            //Filtrar data
            //query es donde va a consultar, y where que datos traer
            consulta=query( productosRef, where( "categoria", "==", categoria ) )
        }else{
            //Devolver Todo
            consulta= productosRef
        }
        getDocs(consulta)
        .then((rta) => {
            let productosDb = rta.docs.map((prod) => {
                return { id: prod.id, ...prod.data() };
            });
            setProductos(productosDb);
            //Simular mas tiempo de carga
            setTimeout(() => {
                setCargando(false);
            }, 2000);
            console.log(productosDb);
        })
        .catch((error) => {
            console.log("Error:", error);
        });
    
    }, [categoria]);

    return (
        <div className="container d-flex justify-content-center align-items-center">
            {cargando ? (
            <div className="cargandoBox">
                <ClockLoader color="#ff005c" loading margin={10} size={100} speedMultiplier={1.25} />
                <p className="cargando">Tren Roca viene con Demoras</p>
            </div>
            ) : (
            <ItemList productos={productos}></ItemList>
            )}
        </div>
    );
};

export default ItemListContainer;

