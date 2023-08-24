import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {
  return (
    <>
      <NavBar/>
      <div className="divGreeting">
        <ItemListContainer greeting= {"¡Bienvenido a Bear-uy, tu destino de moda con sello uruguayo! Descubre nuestras prendas de calidad, especialmente diseñadas para brindarte comodidad y estilo. Únete a nuestra familia de amantes de los buzos y déjate abrazar por la calidez del oso."}/>
      </div>
    </>
  )
}

export default App
