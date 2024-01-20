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
  return (
    <>

    <BrowserRouter>
      <NavBar isOn= {isOn} Username={Username}  />


      <div className='app'>
        <Routes>
          <Route path="/" element= {<ItemListContainer/>} />
          <Route path="/productos/:categoria" element= {<ItemListContainer/>} />
          <Route path="/item/:id" element= {<ItemDetailContainer />} />
          <Route path="/contactos" element= {<Contactos/>} />
          <Route path="/faq" element= {<Faq/>} />
          <Route path="/login" element= {<Login setIsOn= {setIsOn} setUsername={setUsername} setNombre={setNombre} setMail={setMail} />} />
          <Route path="/register" element= {<Register/>} />
          <Route path="/perfil" element= {<UserProfile nombre = {nombre} mail = {mail} Username={Username} />} />
        </Routes>
      </div>
      <Footer/>

      </BrowserRouter>
    </>
  )
}

export default App


