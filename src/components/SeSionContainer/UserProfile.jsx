import {useState} from "react"
import "./UserProfile.css"
import Modal from "../Modal/Modal"

const UserProfile = ({Username, nombre, mail, UserPhoto, setUserPhoto}) => {

  //Estado para abrir y cerrar el modal
  const [modal, setModal] = useState(false)
  
  

  return (

    <div className="container text-center UserContainer">
      <h2 className="Ah2">Datos del Usuario</h2>
      <div className="NombrePhoto">
        <div className="selection">
        <img className="DefaultPhotoProf" src={UserPhoto} alt={Username} />
        <Modal modal={modal} setModal={setModal} />
        </div>
        <h4 className="nombre_usuario">{Username ? Username : "Usuario no disponible" }</h4>
      </div>
      <div className="datos_usuario">
        <span className="datosName">Nombre Completo :</span>
        <p> {nombre}</p>
        
        <span className="datosEmail" >Correo Electronico : </span>
        <p> {mail}</p>
        
      </div>
    </div>


  )
}

export default UserProfile