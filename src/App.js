


import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemList/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import {BrowserRouter,Routes , Route, } from "react-router-dom"
import Cart from "./Components/cart";
import { CartProvider } from "./Components/CartContext";

function App() {




  return ( 
    
    <div className="p-20 h-full bg-gradient-to-r from-[#075985] to-[#292524]">
      <CartProvider>
        <BrowserRouter> 
          <NavBar/>
          <hr />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
           
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<h1>404 not found</h1>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider> 
   </div>
    

    
  );
}

export default App;