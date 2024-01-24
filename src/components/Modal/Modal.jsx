import  { useState } from "react";
import "./Modal.css";


const Modal =() => {
    const [modal, setModal] = useState(false) 
    console.log(modal)
    const toggleModal = () => {
        setModal(!modal);
        console.log(modal)
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
        <button onClick={toggleModal} className="btn-modal">
            Open
        </button>

        {modal ? (
            <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
                <h2>Hello Modal</h2>
                {/* <div>
                    <img className="pgp" src={yui} alt="" />
                </div> */}
                <button className="close-modal" onClick={toggleModal}>
                CLOSE
                </button>
            </div>
            </div>
        ): <p>No se muestra nada</p> }
        </>
    );
}
export default Modal