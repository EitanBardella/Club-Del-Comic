import { createContext, useState } from "react";
import DefaultImg from "/FotoDefault.jpg"

const SesionContext = createContext();



const SesionProvider = ({children}) => {
    
    
    //Revision para ver si el usuario esta o no Iniciado
    const [isOn, setIsOn] = useState(false)
    //Estado para almacenar el nombre de usuario
    const [Username, setUsername] = useState("")
    //Estado para almacenar el nombre real
    const [nombre, setNombre] = useState("")
    //Estado para almacenar el correo
    const [mail, setMail] = useState("")
    //Ambos estados se pasan por props al NavBar y al Login para almacenar el dato y verificar si se inicio sesion
    //Estado para pasar la foto de perfil
    const [UserPhoto, setUserPhoto] = useState(DefaultImg)


    return(
        <SesionContext.Provider value={{isOn,Username,UserPhoto, setIsOn, setUsername,setNombre, setMail, nombre, mail, setUserPhoto}}>
            {children}
        </SesionContext.Provider>
    )
}

export  {SesionContext, SesionProvider }