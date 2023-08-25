
import React, { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  quantity: 0 
});



export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0); 

  console.log(cart)

  const addItem = (item, itemQuantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity: itemQuantity }]);
      setQuantity((prevQuantity) => prevQuantity + itemQuantity); 
    } else {
      alert("producto agregado");
    }
  };

  const removeItem = (itemId, itemQuantity) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
    setQuantity((prevQuantity) => prevQuantity - itemQuantity); 
  };

  const clearCart = () => {
    setCart([]);
    setQuantity(0); 
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, quantity }}
    >
      {children}
    </CartContext.Provider>
  );
};


