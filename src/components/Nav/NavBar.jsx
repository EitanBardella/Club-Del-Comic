import "./NavBar.css" 
import logo from "../../../public/club-comic-logo-1.png"
import CartWidget from "./CartWidget"
import {Link, useNavigate} from "react-router-dom"
import { useContext } from "react"
import { SesionContext } from "../../Context/SesionContext"







const NavBar = () => {
    
    const {isOn,Username,UserPhoto} = useContext(SesionContext)

    const navigate = useNavigate()
    const redirect = ()=>{navigate('/perfil')}


// Se pasan por props los dato si el usuario inicio o no la sesion para que se verifique la condicion y aparezca lo que corresponde
return (
    <>
        <header>
            <Link to="/"><img src={logo}/></Link>
            <nav>
                <ul className="nav_links">
                    <li className="li"><Link className="navegacion" target="_self" to="/productos/comic_manga">Comic y manga</Link></li>
                    <li className="li"><Link className="navegacion" target="_self" to="/productos/merchandising">Merchandising</Link></li>
                    <li className="li"><Link className="navegacion" target="_self" to="/faq">FAQ</Link></li>
                    <li className="li"><CartWidget className="navegacion alfa"/></li>
                </ul>
            </nav>

            <Link  target="_self" className="cta" to="/login"> {isOn ? (<div className="d-flex flex-column justify-content-center align-items-center user"><Link to="/perfil" target="_self" className="user-button" onClick={redirect} > {Username}</Link><img src= {UserPhoto} alt="DefaultPhot" className="DefaultPhoto" /></div>) : "Inicio de Sesion"}</Link>
            <Link  target="_self" className="cta" to="/contactos"><button className="Contact-button">Contacto</button></Link>

        </header>
    </>
)
}

export default NavBar