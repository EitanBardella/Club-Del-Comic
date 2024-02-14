import { useContext, useState } from "react";
import FormularioCheckout from "./FormularioCheckout";
import { CartContext } from "../../Context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import db from "../../db/db";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

    const Checkout = () => {
        const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        });
        const { cart, precioTotal } = useContext(CartContext);
        const [idOrden, setIdOrden] = useState(null);
    
        const guardarDatosInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
        };
    
        const enviarOrden = (event) => {
        event.preventDefault();
        //le damos formato a la orden
        const orden = {
            comprador: { ...datosForm },
            productos: [...cart],
            total: precioTotal(),
            fecha:Date.now(),
            estado:false
        };

            // //Verificaicon del mail
        if (datosForm.email != datosForm.repetirEmail){
            Swal.fire({
                title: "CUIDADO!",
                text: "Los emails colocados no son iguales. Revisalos por favor.",
            icon: "warning",
            });
            return
        }

        //subimos la orden a firebase
        const ordenesRef = collection(db, "ordenes");
        addDoc(ordenesRef, orden)
            .then((respuesta) => {
            //borramos los datos de los inputs
            setDatosForm({
                nombre: "",
                telefono: "",
                email: "",
            });
    
            //guardamos el id de la orden en una variable de estado
            setIdOrden(respuesta.id);
            })
            .catch((error) => console.log(error));
        };
    
        return (
        <div>
            {idOrden ? (
            <div>
                <h2>Orden generada con exito!!!</h2>
                <p> guarde el id de su orden: {idOrden} </p>
            </div>
            ) : (
            <FormularioCheckout
                datosForm={datosForm}
                guardarDatosInput={guardarDatosInput}
                enviarOrden={enviarOrden}
            />
            )}
        </div>
        );
    };
    export default Checkout;



