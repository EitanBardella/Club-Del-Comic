import "./Footer.css"
import logo from "../../assets/club-comic-logo-1.png"
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
return (
    <>
        <footer>
            <section>
                <img className="logo" src={logo} alt="Club Del Comic"/>
            </section>
            <section className="logotipo">
                <h3 className="logotipo">Club Del Comic</h3>
                <p>Derechos de autor reservador</p>
            </section>
            <section className="redes">
                <span className="ig"><a href="https://www.instagram.com/eitan_bardella11/" target="_blank" rel="noreferrer"className="i"><FaInstagram className="fa-instagram" /></a></span>
                <span className="whs"><a target="_blank" href="" className="i"><FaWhatsapp  className="fa-whatsapp"/></a></span>
                {/* <span className="ln"><a target="_blank" href="https://www.linkedin.com/in/eitan-bardella-campana-1138bb272/" rel="noreferrer" className="i"></a></span> */}
                <span className="yt"><a target="_blank" href="https://www.youtube.com/@eitanbardella6480" rel="noreferrer" className="i"><TfiYoutube className="fa-youtube" /></a></span>
            </section>
        </footer>
    </>
)
}

export default Footer