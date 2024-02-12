import "./Faq.css"
import Itemfaq from "./Itemfaq"

const Faq = () => {

    return (
        
        <div className="faq">
            <h1>Frequently Asked Question</h1>
            <Itemfaq pregunta = {"¿Quienes somos?"} respuesta={"Somos un grupo con más de 15 años de experiencia en el mundo de las ventas y fanáticos del mundo del manga y los comics, los cuales cumplieron su sueño de abrir una tienda especializada en nuestra pasión, comics y manga."} />
            <Itemfaq pregunta = {"¿Qué métodos de pago tenemos?"} respuesta={"Nostros nos manejamos con todo tipo de tarjetas de crédito (Visa, Mastercard), Tarjetas de debito y también mercado pago."} />
            <Itemfaq pregunta = {"¿Donde puedo retirar mi compra?"} respuesta={"Se puede retirar de forma presencial o tambien se puede enviar via Correo Argentino."} />
            <Itemfaq pregunta = {"¿Cuanto tiempo de demora tiene el envio?"} respuesta={"El tiempo de envio de la compra va a depender del los tiempos que maneje Correo Argentino"} />


        </div>
    )   
}

export default Faq

//Revisar estilos



