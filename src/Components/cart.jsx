

import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const{ cart, clearCart, totalQuantity, total} = useContext(CartContext)
    if(totalQuantity=== 0) {
      return(
        <div>
          <h1>
            Carrito Vacio
          </h1>
          <Link to="/" className="boton">volver</Link>
        </div>
      )
    }


    return(
      <div>
        <h3>total: ${total}</h3>
        <button onClick={()=>clearCart}  className="boton">vaciar carrito</button>
        <Link to='/checkout' className='boton'>checkout</Link>
      </div>
    )
}

export default Cart;












/*
import React, { useContext } from 'react';
import { useCartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { carrito, precioTotal, vaciarCarrito } = useCartContext();

  const handleVaciar = () => {
      vaciarCarrito();
  }

return (
  <div className="container">
      <h1 className="main-title">Carrito</h1>

      {
          carrito.map((prod) => (
              <div key={prod.id}>
                  <br />
                  <h3>{prod.titulo}</h3>
                  <p>Precio unit: ${prod.precio}</p>
                  <p>Precio total: ${prod.precio * prod.cantidad}</p>
                  <p>Cant: {prod.cantidad}</p>
                  <br />
              </div>
          ))
      }

      {  
          carrito.length > 0 ?
          <>
              <h2>Precio total: ${precioTotal()}</h2>
              <button onClick={handleVaciar}>Vaciar</button>
              <Link to="/checkout">Finalizar compra</Link>
          </> :
          <h2>El carrito está vacío :</h2>
      }
      
  </div>
)
}

export default Cart*/