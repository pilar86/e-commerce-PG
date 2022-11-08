import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Productos/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from './context/cartContext';
import CartView from './components/CartView/CartView';
import Checkout from './components/Checkout/Checkout';


function App() {

  return (

    <CartContextProvider> 
    <BrowserRouter> 
      <NavBar/>

      <Routes> 
        <Route path="/home" element={<ItemListContainer/>}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
        <Route path="/body/:id" element={<ItemDetailContainer/>}/>
        <Route path="/checkout/:orderid" element={<Checkout/>}/>
        <Route path="*" element={<h5>"Algo salió mal, ir a Home"</h5>}/>
        <Route path="/cartView" element={<CartView/>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
    </CartContextProvider>
     
  );
}
export default App;
