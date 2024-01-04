import './App.css'
import NavBar  from './components/NavBar'
import Footer from './components/Footer'
import  ItemListContainer  from './components/Productos/ItemListContainer'
import "bootstrap/dist/css/bootstrap.min.css" 


//Componente Padre renderiza coBmponentes hijos
function App() {
  
  return (
    <>
    <NavBar/>
    <div className='app'>
      <ItemListContainer/>
    </div>
    <Footer/>
    </>
  )
}

export default App
