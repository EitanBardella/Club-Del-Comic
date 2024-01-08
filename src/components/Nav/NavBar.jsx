import "./NavBar.css" 
import logo from "../../assets/club-comic-logo-1.png"
import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"



const NavBar = () => {

return (
    <>
        <header>
            <Link to="/"><img src={logo}/></Link>
            <nav>
                <ul className="nav_links">
                    <li className="li"><a className="navegacion" target="_self" href="./html/comicymanga.html">Comic y manga</a></li>
                    <li className="li"><a className="navegacion" target="_self" href="./html/merchandising.html">Merchandising</a></li>
                    <li className="li"><a className="navegacion" target="_self" href="./html/faq.html">FAQ</a></li>
                    <li className="li"><a id="showCart" className="navegacion" target="_self" href="#"><CartWidget cantidad={1}/></a></li>
                </ul>
            </nav>
            <a  target="_self" className="cta" href="./html/contactos.html"><button>Contacto</button></a>
        </header>
    </>
)
}

export default NavBar