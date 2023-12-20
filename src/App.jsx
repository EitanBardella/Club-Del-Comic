
import './App.css'
import NavBar from './components/NavBar'
import Prueba from './components/Prueba'
import ItemListContainer from './components/ItemListContainer'
//Componente Padre renderiza componentes hijos
function App() {
  
  return (
    <>
    <div>
      <NavBar/>
      <Prueba/>
    </div>
    <div>
      <h1><ItemListContainer greeting={"Bienvenidos"}/></h1>
    </div>
    </>
  )
}

export default App
