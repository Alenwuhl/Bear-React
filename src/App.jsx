import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/itemListContainer"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"
import ShoppingCartProvider, { CartContext } from "./context/ShoppingCartContext";
//import Document from "./components/Document"
//import Collection from "./components/Collection"
import Form from "./components/Form"
//import ShoppingCartContext from "./context/ShoppingCartContext"
//import Loading from "./components/Loading"


const App = () => {



  return (
    <div>
      <ShoppingCartProvider>
        <BrowserRouter>
          <NavBar/>

          <Routes>
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path= '/' element={<ItemListContainer />} />
            <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/Form" element={<Form />} />
          </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>
    </div>
//<Document/>
//<Collection />
//<Form />
//<Loading />
  )
}

export default App
