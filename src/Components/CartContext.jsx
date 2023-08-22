
import React, { createContext, useState } from "react"

export const CartContext = createContext({
  cart:[]
})
export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const addItem = (item, quantity) =>{
    if (!isInCart(item.id)) {
      setCart( prev => [...prev,{...item, quantity}])
    }else{
      console.error("producto agregado")
    }
  }

  const removeitem =(itemId) => {
    const cartUpdated = cart.filter(prod =>prod.id !== itemId)
  }
  const clearCart =()=> {
    setCart([])
  }

  const isInCart = (itemId) =>{
    return cart.some(prod=> prod.id !== itemId)
  }

  return (
    <CartContext.Provider value={{cart, addItem, removeitem, clearCart}}>
        {children}
    </CartContext.Provider>
  )
}

/*import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext({
  carrito: [],
  agregarProducto: () => {},
  eliminarProducto: () => {},
  limpiarCarrito: () => {},
  productoEnCarrito: () => {}
});

export const useCartContext = () => {
  return useContext(CartContext);
};

function CarritoProvider(props) {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    setCarrito([carrito, producto]);
  };

  const eliminarProducto = (productoId) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== productoId);
    setCarrito(nuevoCarrito);
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };

  const productoEnCarrito = (productoId) => {
    return carrito.some((producto) => producto.id === productoId);
  };

  const valorDeCarrito = {
    carrito: carrito,
    agregarProducto: agregarProducto,
    eliminarProducto: eliminarProducto,
    limpiarCarrito: limpiarCarrito,
    productoEnCarrito: productoEnCarrito
  };

  return (
    <CartContext.Provider value={valorDeCarrito}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CarritoProvider;*/
