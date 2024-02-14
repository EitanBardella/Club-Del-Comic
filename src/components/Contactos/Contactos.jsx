import { useForm } from "react-hook-form"
import "./Contactos.css"
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import db from "../../db/db";

const Contactos = () => {

        // // Capturar los datos ingresados utilizando react-hook-form
        // const { register, handleSubmit, reset } = useForm();

        // const enviar = async (datos) => {
        //     try {
        //         // Enviar los datos a Firestore
        //         await addDoc(collection(db, "contactos"), {
        //             nombre: datos.nombre,
        //             email: datos.email,
        //             telefono: datos.telefono,
        //             motivo: datos.motivo,
        //             mensaje: datos.mensaje,
        //             timestamp: serverTimestamp()
        //         });
    
        //         // Mostrar un mensaje de éxito utilizando SweetAlert2
        //         Swal.fire({
        //             title: "Mensaje enviado con éxito!",
        //             text: "Tu opinión nos ayuda a mejorar :)",
        //             imageUrl: "/chika.jpeg",
        //             imageWidth: 400,
        //             imageHeight: 300,
        //             imageAlt: "Custom image",
        //         }).then(() => {
        //             // Resetear el formulario después de mostrar el mensaje de éxito
        //             reset();
        //         });
        //     } catch (error) {
        //         console.error("Error al enviar el formulario:", error);
        //     }
        // };


    //Capturar los datos ingresados
    const {register, handleSubmit,reset} = useForm();

    const enviar = (datos) => {

        if (!datos.nombre || !datos.email || !datos.telefono || !datos.motivo|| !datos.mensaje) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor completa todos los campos',
            });
            return; // Salir de la función si algún campo está vacío
        }
        //Sweet Alert
        Swal.fire({
            title: "Mensaje enviado con exito!",
            text: "Tu opinion nos ayuda a mejorar :)",
            imageUrl: "/chika.jpeg",
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: "Custom image",
        }).then(() => {
            // Resetear el formulario después de mostrar el mensaje de éxito
            reset();
        });
    }



    return (
        //Body
        <div className="contact">
            {/* Contenedor del titulo */}
            <div className="content">
                <h1 className="LC">Contact<span>Us</span></h1>
                {/* Contenedor del Formulario de contacto y de informacion extra */}
                <div className="contact-wrapper">
                    <div className="contact-form" onSubmit={handleSubmit(enviar)}>
                        <h3>Contactanos</h3>
                        <form>
                            <p>
                                <label htmlFor="Nombre Completo">Nombre Completo</label>
                                <input type="text"  placeholder="Ej: Jose Gomez" {...register("nombre")} />
                            </p>
                            <p>
                                <label htmlFor="">Correo electronico</label>
                                <input type="email"  placeholder="Ej: Jose_gomez@gmail.com" {...register("email")} />
                            </p>
                            <p>
                                <label htmlFor="">Telefono</label>
                                <input type="tel" placeholder="Ej: 1156985446" {...register("telefono")} />
                            </p>
                            <p className="block">
                                <label htmlFor="Affair">Motivo</label>
                                <input type="text"   {...register("motivo")} />
                            </p>
                            <p>
                                <label htmlFor="">Mensaje</label>
                                <input type="message" rows="3" cols="10" {...register("mensaje")}  />
                            </p>
                            <p className="block">
                                <button type="submit" id="submit"  >Send</button>
                            </p>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h4 className="contact-h4">Mas informacion</h4>
                        <ul>
                            <li>Baker Street</li>
                            <li>+54123456789</li>
                            <li>contact@website.com</li>
                        </ul>
                        <p className="contact-p">Tienda especializada en mangas y comics hace 15 años. Somos distribuidor oficial de distintas editoriales. Contamos con distintos medios de pago y envio. Ante cualquier consulta no dudes en contactarnos!!</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactos

