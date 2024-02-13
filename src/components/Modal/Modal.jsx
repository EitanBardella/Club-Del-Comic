import  { useState } from "react";
import "./Modal.css";


const Modal =({profileTittle,profileContent}) => {
    const [modal, setModal] = useState(false) 
    console.log(modal)
    const toggleModal = () => {
        setModal(!modal);

    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
        <button onClick={toggleModal} className="open-modal">
            Seleccionar foto de perfil
        </button>

        {modal && (
            <div className="modal-profile">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                    <h2>{profileTittle}</h2>
                    
                    {profileContent}
                    
                    <button className="close-modal" onClick={toggleModal}>
                    CLOSE
                    </button>
                </div>
            </div>
        )  }
        </>
    );
}
export default Modal