import React from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
  return (
    <div className="flex">
      <button className="boton" onClick={handleRestar}>-</button>
      <h3>{cantidad}</h3>
      <button className="boton" onClick={handleSumar}>+</button>
      <Link to="/cart" className="boton">Agregar al carrito</Link>
    </div>
  );
};

export default ItemCount;








