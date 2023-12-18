
import './App.css'
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'
import Prueba from './components/Prueba'
//Componente Padre renderiza componentes hijos
function App() {
  
  return (
    <>
    <div>
      <NavBar/>
        <CartWidget/>
      <Prueba/>
    </div>
    </>
  )
}

export default App
