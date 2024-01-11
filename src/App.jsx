import './App.css'
import NavBar  from './components/Nav/NavBar'
import Footer from './components/Footer/Footer'
import  ItemListContainer  from './components/ListContainer/ItemListContainer'
import ItemDetailContainer from './components/DetailContainer/ItemDetailContainer'
import "bootstrap/dist/css/bootstrap.min.css" 
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Contactos from './components/Contactos/Contactos'
import Faq from './components/Faq/Faq'

//Componente Padre renderiza coBmponentes hijos
function App() {
  
  return (
    <>

    <BrowserRouter>
      <NavBar/>


      <div className='app'>
        <Routes>
          <Route path="/" element= {<ItemListContainer/>} />
          <Route path="/productos/:categoria" element= {<ItemListContainer/>} />
          <Route path="/item/:id" element= {<ItemDetailContainer itemId= {2} />} />
          <Route path="/contactos" element= {<Contactos/>} />
          <Route path="/faq" element= {<Faq/>} />
        </Routes>
      </div>
      <Footer/>

      </BrowserRouter>
    </>
  )
}

export default App

