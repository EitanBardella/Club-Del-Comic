import './App.css'
import NavBar  from './components/NavBar'
import Footer from './components/Footer'
import  ItemListContainer  from './components/Productos/ItemListContainer'
import ItemDetailContainer from './components/Productos/ItemDetailContainer'
import "bootstrap/dist/css/bootstrap.min.css" 
import {BrowserRouter, Route, Routes} from "react-router-dom"


//Componente Padre renderiza coBmponentes hijos
function App() {
  
  return (
    <>
    <NavBar/>
    <div className='app'>
      <ItemListContainer/>
      <ItemDetailContainer ItemId={2}/>
    </div>
    <Footer/>
    </>
  )
}

export default App
