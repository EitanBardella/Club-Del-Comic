
import CartWidget from './CartWidget'

const NavBar = () => {

    return (
        <nav>
            <div>
                <div>
                    <span>Club del Comic</span>
                </div>
                <ul>
                    <a href="">
                        <li>HOME</li>
                    </a>
                    <a href="">
                        <li>Mangas y Comics</li>
                    </a>
                    <a href="">
                        <li>Merchandising</li>
                    </a>
                    <a href="">
                        <li>Contactos</li>
                    </a>
                    <CartWidget cantidad = {1} />
                </ul>
            </div>
        </nav>
    )
}

export default NavBar