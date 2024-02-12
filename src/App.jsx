import './App.css'
import NavBar  from './components/Nav/NavBar'
import Footer from './components/Footer/Footer'
import  ItemListContainer  from './components/ListContainer/ItemListContainer'
import ItemDetailContainer from './components/DetailContainer/ItemDetailContainer'
import "bootstrap/dist/css/bootstrap.min.css" 
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Contactos from './components/Contactos/Contactos'
import Faq from './components/Faq/Faq'
import Login from "./components/SesionContainer/Login"
import Register from "./components/SesionContainer/Register"
import { useState } from 'react'
import UserProfile from './components/SesionContainer/UserProfile'
import DefaultImg from "../public/FotoDefault.jpg"
import { CartProvider} from './Context/CartContext'
import Carrito from './components/Carrito/Carrito'


//Componente Padre renderiza coBmponentes hijos
function App() {
  


  




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
  return (
    <>

      <div></div>
      <BrowserRouter >
        <CartProvider>
          <NavBar isOn= {isOn} Username={Username} UserPhoto = {UserPhoto} />


          <div className='app'>
            <Routes>
              <Route path="/" element= {<ItemListContainer/>} />
              <Route path="/productos/:categoria" element= {<ItemListContainer/>} />
              <Route path="/item/:id" element= {<ItemDetailContainer />} />
              <Route path="/contactos" element= {<Contactos/>} />
              <Route path="/faq" element= {<Faq/>} />
              <Route path="/login" element= {<Login setIsOn= {setIsOn} setUsername={setUsername} setNombre={setNombre} setMail={setMail} />} />
              <Route path="/register" element= {<Register/>} />
              <Route path="/perfil" element= {<UserProfile nombre = {nombre} mail = {mail} Username={Username} UserPhoto={UserPhoto} setUserPhoto = {setUserPhoto} />} />
              <Route path='/carrito' element={<Carrito/>} />
            </Routes>
          </div>
          <Footer/>
        </CartProvider>
      </BrowserRouter>

    </>
  )
}

export default App


