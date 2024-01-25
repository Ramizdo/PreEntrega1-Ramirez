import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a tu Tienda de Jockey's Favorita" />
    </div>
  )
}

export default App
