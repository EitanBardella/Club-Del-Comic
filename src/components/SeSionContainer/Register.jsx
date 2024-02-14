import { MdConstruction } from "react-icons/md";
import { ImSad2 } from "react-icons/im";
import "./Register.css"


const Register = () => {
    return (
        <div className="registerZone">
            <div className="constructionTittle">
                <h1>Esta pagina esta en construcción </h1>
                <MdConstruction className="contructionIcon" />
            </div>
            <div className="regretsZone">
                <h2>Disculpe las molestias </h2>
                <ImSad2 className="sadIcon"/>
            </div>
            <img className="imgKaguya" src="/constuccion.jpeg" alt="kaguya" />
        </div>
    )
}

export default Register