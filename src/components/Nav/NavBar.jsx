import "./NavBar.css" 
import logo from "../../../public/club-comic-logo-1.png"
import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"




const NavBar = () => {

return (
    <>
        <header>
            <Link to="/"><img src={logo}/></Link>
            <nav>
                <ul className="nav_links">
                    <li className="li"><Link className="navegacion" target="_self" to="/productos/comic_manga">Comic y manga</Link></li>
                    <li className="li"><Link className="navegacion" target="_self" to="/productos/merchandising">Merchandising</Link></li>
                    <li className="li"><Link className="navegacion" target="_self" to="/faq">FAQ</Link></li>
                    <li className="li"><Link id="showCart" className="navegacion" target="_self" to="#"><CartWidget cantidad={1}/></Link></li>
                </ul>
            </nav>
            <Link  target="_self" className="cta" to="/contactos"><button>Contacto</button></Link>
        </header>
    </>
)
}

export default NavBar