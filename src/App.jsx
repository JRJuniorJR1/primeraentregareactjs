import './App.css'
import Navbar from './components/Navbar/navbar'
import Contenedor from './components/Contenedores/Contenedor'
import Footer from './components/Footer/Footer'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>

        <Navbar/>
        <Contenedor anuncio={"lorem 1"}/>
        <Contenedor anuncio={"Esto es un lorem 2"}/>

        <Footer/>

        <CartWidget/>

        <ItemListContainer greeting={"Bienvenidos a mi pagina web"}/>

    </>
  )
}

export default App
