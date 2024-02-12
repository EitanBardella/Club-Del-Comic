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

import UserProfile from './components/SesionContainer/UserProfile'

import { CartProvider} from './Context/CartContext'
import Carrito from './components/Carrito/Carrito'
import Pagar from './components/Pagar/Pagar'
import { SesionProvider } from './Context/SesionContext'


//Componente Padre renderiza coBmponentes hijos
function App() {
  
  return (
    <>

      <div></div>
      <BrowserRouter >
        <CartProvider>
          <SesionProvider>
            <NavBar  />


            <div className='app'>
              <Routes>
                <Route path="/" element= {<ItemListContainer/>} />
                <Route path="/productos/:categoria" element= {<ItemListContainer/>} />
                <Route path="/item/:id" element= {<ItemDetailContainer />} />
                <Route path="/contactos" element= {<Contactos/>} />
                <Route path="/faq" element= {<Faq/>} />
                <Route path="/login" element= {<Login />} />
                <Route path="/register" element= {<Register/>} />
                <Route path="/perfil" element= {<UserProfile />} />
                <Route path='/carrito' element={<Carrito/>} />
                <Route path="/pagar" element={<Pagar />} />
              </Routes>
            </div>
            <Footer/>
          </SesionProvider>
        </CartProvider>
      </BrowserRouter>

    </>
  )
}

export default App


