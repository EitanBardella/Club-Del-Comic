import { useState } from 'react';
import Cleave from 'cleave.js/react';
import { FaCreditCard, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover } from 'react-icons/fa';
import './FormularioCheckout.css'; // Importa el archivo de estilos CSS
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const FormularioCheckout = ({ datosForm, guardarDatosInput, enviarOrden }) => {
    // Función para detectar el tipo de tarjeta
    const detectarTipoTarjeta = (numeroTarjeta) => {
        // Expresiones regulares para detectar el tipo de tarjeta
        const regexVisa = /^4/;
        const regexMastercard = /^5[1-5]/;
        const regexAmex = /^3[47]/;
        const regexDiscover = /^6(?:011|5[0-9]{2})/;
        
        if (regexVisa.test(numeroTarjeta)) {
            return 'visa';
        } else if (regexMastercard.test(numeroTarjeta)) {
            return 'mastercard';
        } else if (regexAmex.test(numeroTarjeta)) {
            return 'amex';
        } else if (regexDiscover.test(numeroTarjeta)) {
            return 'discover';
        } else {
            return 'default'; // Otra tarjeta o tarjeta no válida
        }
    };

    // Estado para almacenar el tipo de tarjeta detectado
    const [tipoTarjeta, setTipoTarjeta] = useState('');

    // Función para manejar el cambio en el input de la tarjeta
    const handleInputChange = (event) => {
        guardarDatosInput(event); // Guarda los datos del input en el estado
        const tipo = detectarTipoTarjeta(event.target.rawValue); // Detecta el tipo de tarjeta
        setTipoTarjeta(tipo); // Actualiza el tipo de tarjeta
    };

    const pagar = () => {
            Swal.fire({
            title: "Estas seguro?",
            text: "No vas a poder revertirlo!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Estoy Seguro!"
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "GENIAL!!",
                    text: "Gracias por tu compra :3",
                    imageUrl: "/gato.jpeg",
                    imageWidth: 400,
                    imageHeight: 300,
                    imageAlt: "Custom image",
                });
            }
            });
    };

    // Componente para mostrar el icono de la tarjeta correspondiente
    const TarjetaIcono = () => {
        switch (tipoTarjeta) {
            case 'visa':
                return <FaCcVisa className="card-icon visa" />;
            case 'mastercard':
                return <FaCcMastercard className="card-icon mastercard" />;
            case 'amex':
                return <FaCcAmex className="card-icon amex" />;
            case 'discover':
                return <FaCcDiscover className="card-icon discover" />;
            default:
                return <FaCreditCard className="card-icon" />;
        }
    };
    

    return (
        <form className="checkout-form" onSubmit={enviarOrden}>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} />
            </div>

            <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input type="text" id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput} />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput} />
            </div>
            <div className="form-group">
                <label htmlFor="repetirEmail">Repetir Email</label>
                <input type="email" id="repetirEmail" name="repetirEmail" value={datosForm.repetirEmail} onChange={guardarDatosInput} />
            </div>
            <div className="form-group">
            <label htmlFor="tarjeta">Número de tarjeta de crédito</label>
            <div className="card-input-container">
                <Cleave
                    id="tarjeta"
                    name="tarjeta"
                    options={{ creditCard: true }}
                    className="input-tarjeta"
                    value={datosForm.tarjeta}
                    onChange={handleInputChange}
                />
                <TarjetaIcono />
            </div>
            </div>


            <button type="submit" className="btn-submit" onClick={pagar}>Enviar orden</button>
        </form>
    );
};

export default FormularioCheckout;





