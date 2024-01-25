import { useForm } from "react-hook-form"
import {Link} from "react-router-dom"
import "./Login.css"
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';



const Login = ({setIsOn, setUsername,setNombre, setMail}) => {
    //Capturar los datos ingresados
    const {register, handleSubmit} = useForm();
    

    const enviar = (datos) => {
        console.log(datos);
        Swal.fire({
            title: "Sweet!",
            text: "Modal with a custom image.",
            imageUrl: "https://unsplash.it/400/200",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
        });
    
        //Luego de la animacion de verificacion de datos se actualiza el Username con el dato ingresado, lo mismo pero con los otros datos para los demas set
        setUsername(datos.usuario)
        setNombre(datos.nombre)
        setMail(datos.email)
        setIsOn(true)
    }

    //Toggle para mostrar y ocultar el texto de contraseña
    const [verContraseña, setVerContraseña] = useState(false)

    const toggleVisibilidad = () => {
        setVerContraseña(!verContraseña)
    }

    return (

        <div className="container d-flex flex-column justify-content-center align-items-center login-container">
            <h2 className="login-header">Inicio de Sesion</h2>
            <div className="login-form d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit(enviar)}>
            {/*Login form*/}
                <form>
                    <div>
                        <label htmlFor="Nombre Completo">Nombre Completo</label>
                        <input type="text"  placeholder="  Ej: Jose Gomez" {...register("nombre")} />
                    </div>
                    <div>
                        <label htmlFor="">Correo electronico</label>
                        <input type="email"  placeholder=" Ej: Jose_gomez@gmail.com" {...register("email")} />
                    </div>
                    <div>
                        <label htmlFor="">Nombre de usuario</label>
                        <input type="text" placeholder=" Ej: xXEitanXx" {...register("usuario")} />
                    </div>
                    <div>
                        <label htmlFor="">Contraseña</label>
                        <div className="password-input-container" >
                        {/* Si ver contraseña es verdadero se muestra el texto, sino no (cambia el tipo de entrada) */}
                            <input type={verContraseña ? "text" :"password"}  {...register("contraseña")}  />
                            <span onClick={toggleVisibilidad}>
                                {verContraseña ? <FaEyeSlash/> : <FaEye/>}
                            </span>
                        </div>
                    </div>
                    <div className="buttonCenter">
                        <button type="submit" id="submit" className="buttonCenterI">Iniciar sesion</button>
                    </div>
                    
                </form>
            </div>
            {/*Register form*/}
            <div className="register-form d-flex flex-column justify-content-center align-items-center">
                <h4>¿Aun no te has registrado?</h4>
                <p>Has clic en Registrarse para crear una nueva cuenta</p>
                <Link target="_self" className="cta" to="/register"><button>Registrarse</button></Link>
            </div>
        </div>

    )
}

export default Login