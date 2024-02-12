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


    // //Verificaicon del mail
    // if (datosForm.email != datosForm.repetirEmail){
    //     Swal.fire({
    //         title: "CUIDADO!",
    //         text: "Los emails colocados no son iguales. Revisalos por favor.",
    //         icon: "warning",
    //     });
    //     return
    // }

// const Pagar = () => {
//     const [datosForm, setDatosForm] = useState({
//         nombre: "",
//         telefono: "",
//         email: "",
//         repetirEmail:"",
//         tarjeta: "", // Agregamos el campo de la tarjeta de crédito
//     });


//     const { cart, precioTotal } = useContext(CartContext);
//     const [idOrden, setIdOrden] = useState(null);

//     const guardarDatosInput = (event) => {
//         setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
//     };

//     const enviarOrden = async (event) => { // Hacemos la función asíncrona para esperar la respuesta de addDoc
//         event.preventDefault();
//         // Le damos formato a la orden
//         const orden = {
//             comprador: { ...datosForm },
//             productos: [...cart],
//             total: precioTotal(),
//         };
//         try {
//             // Subimos la orden a Firebase
//             const ordenesRef = collection(db, "ordenes");
//             const docRef = await addDoc(ordenesRef, orden);
//             // Borramos los datos de los inputs
//             setDatosForm({
//                 nombre: "",
//                 telefono: "",
//                 email: "",
//                 tarjeta: "", // También limpiamos el campo de la tarjeta de crédito
//             });
//             // Guardamos el ID de la orden en una variable de estado
//             setIdOrden(docRef.id);
//         } catch (error) {
//             console.error("Error al enviar la orden:", error);
//         }
//     };

//     return (
//         <div>
//             {idOrden ? (
//                 <div>
//                     <h2>¡Orden generada con éxito!</h2>
//                     <p>Guarde el ID de su orden: {idOrden}</p>
//                 </div>
//             ) : (
//                 <FormularioCheckout
//                     datosForm={datosForm}
//                     guardarDatosInput={guardarDatosInput}
//                     enviarOrden={enviarOrden}
//                 />
//             )}
//         </div>
//     );
// };

// export default Pagar;
