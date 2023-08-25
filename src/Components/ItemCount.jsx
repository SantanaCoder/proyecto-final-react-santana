import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const ItemCount = ({ cantidad, handleRestar, handleSumar,product }) => {
  const { addItem } = useContext(CartContext);

  const handleAgregar = () => {
    addItem(
      product, cantidad
    );
  };

  return (
    <div className="flex">
      <button className="boton" onClick={handleRestar}>-</button>
      <h3>{cantidad}</h3>
      <button className="boton" onClick={handleSumar}>+</button>
      
      <Link
        to="/cart"
        className="boton"
        onClick={() => handleAgregar()}        
      >
        Agregar al carrito
      </Link>
    </div>
  );
};

export default ItemCount;
