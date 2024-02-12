import {useEffect, useState} from "react"
import "./UserProfile.css"
import Modal from "../Modal/Modal"

const UserProfile = ({Username, nombre, mail, UserPhoto, setUserPhoto}) => {

  //Estado para guardar la Foto seleccionada
  const [foto,setFoto] = useState()

  useEffect(() => {
    // Operaciones adicionales después de que foto se actualiza
    console.log("Foto actualizada:", foto);

    // Funciona con 2 clicks nose pq
  }, [foto]);

  // Funcion para seleccionar la foto
  const selectedFoto = (path) => {
    // Extraer la ruta de la imagen del botón seleccionado

    setFoto(path);
    setUserPhoto(path)
    console.log(path);
  }
  

  return (

    <div className="container text-center UserContainer">
      <h2 className="Ah2">Datos del Usuario</h2>
      <div className="NombrePhoto">
        <div className="selection">
        <img className="FotoProfile" src={UserPhoto} alt={Username} />



          <Modal  //Le paso por props el contenido que quiero que tenga el modal en cuanto a selecionar foto de perfil
          profileContent={ 
            <>
              <div className="profile-div">
                <button className="pgpFoto" onClick={()=> selectedFoto("/YuiLogo.jpg")}><img src="/YuiLogo.jpg"  alt="Yui Logo" className="pgp"/></button>
                <button className="pgpFoto" onClick={()=> selectedFoto("/MuiLogo.jpg")}><img src="/MuiLogo.jpg" className="pgp"/></button>
                <button className="pgpFoto" onClick={()=> selectedFoto("/MiaAkiyama.jpg")}><img src="/MiaAkiyama.jpg" className="pgp"/></button>
              </div>
            </>
            } 
            profileTittle={"Seleccione Foto De Perfil"} />




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