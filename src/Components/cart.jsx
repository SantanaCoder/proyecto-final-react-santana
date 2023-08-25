
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart,  removeItem } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h1>Carrito Vacío</h1>
        <Link to="/" className="boton">
          Volver
        </Link>
      </div>
    );
  }
  const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };                                          

  return (
    <div>
      <h2>Productos en el Carrito:</h2>
        <ul className='py-4 px-6 text-sm font-medium flex justify-between items-center'>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} 
              - Cantidad: {item.quantity} 
              - Precio: ${item.price * item.quantity} 

                <img src={item.image} className='incart' alt='pandero'></img> 

                <h2>Categoria-{item.categoria}</h2>

                <button className="boton" onClick={() => removeItem(item.id)}>Eliminar</button>

                <Link to="/checkout" className="boton"> <h1>Terminar proceso de compra </h1>(Checkout) </Link>
 
                <h3>Total: ${calculateTotal(cart)}</h3>
 
                <button onClick={clearCart} className="boton">Vaciar Carrito</button>
            </li>
          ))}
        </ul>
    </div>
  );
};



export default Cart;











