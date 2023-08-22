
import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount";
import { CartContext } from "../CartContext";

const ItemDetail = ({ id, name, img, category, descripcion, price, stock }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleRestar = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSumar = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleAgregar = () => {
    addItem(
      {
        id,
        name,
        img,
        category,
        descripcion,
        price,
        stock,
      },
      quantity
    );
  };

  return (
    <div>
      <div className="tarjetas">
        <img src={img} alt={name} />
      </div>
      <div>
        <h1>Nombre: {name}</h1>
        <p>Descripcion: {descripcion}</p>
        <h4>Precio: {price}</h4>
      </div>
      <div>
        <ItemCount
          cantidad={quantity}
          handleSumar={handleSumar}
          handleRestar={handleRestar}
          handleAgregar={handleAgregar}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
