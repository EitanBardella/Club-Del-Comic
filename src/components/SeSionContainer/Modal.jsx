import "./Modal.css"
import { useState } from 'react'
import {Link} from "react-router-dom"
import yui from "../../../public/YuiLogo.jpg"
import mugi from "../../../public/MuiLogo.jpg"

const Modal = ({modal, setModal}) => {

    //Funcion para abrir y cerrar modal
    const toggleModal = () => {
        setModal(!modal)
        console.log(true)

    }

    return (
        <div>

            <button onClick={toggleModal} className="selection_button">
                    Foto de Perfil
            </button>
            

            {modal && (
                <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                    <h2>Seleccione una foto de perfil</h2>
                    <img src={yui} alt=""  className="selected_photo"/>
                    <img src={mugi} alt="" className="selected_photo" />
                    <button className="close-modal" onClick={toggleModal}>
                    CLOSE
                    </button>
                </div>
                </div>
            )}

        </div>
    )
}

export default Modal