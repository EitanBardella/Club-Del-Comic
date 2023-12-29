import './App.css'
import NavBar  from './components/NavBar'
import Footer from './components/Footer'
import  Tarjetas  from './components/Tarjetas'
import "bootstrap/dist/css/bootstrap.min.css" 


//Componente Padre renderiza coBmponentes hijos
function App() {
  
  return (
    <>
    <NavBar/>
    <div className='app'>
      <Tarjetas/>
    </div>
    <Footer/>
    </>
  )
}

export default App
