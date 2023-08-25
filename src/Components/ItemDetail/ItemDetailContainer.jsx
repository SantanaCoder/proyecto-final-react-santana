import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState(null);
  const hardcodedId = "17sf7JzNOkI7ySNBSUkJ"; 

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const productRef = doc(db, "instrumentos", hardcodedId);
        const productfire = await getDoc(productRef);

        if (productfire.exists()) {
          const productData = productfire.data();
          setDetalle(productData);
        } else {
          console.log("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProducto();
  }, []);

  return (
    <div>
      {detalle ? <ItemDetail {...detalle} /> : <p>Cargando...</p>}
    </div>
  );
}

export default ItemDetailContainer;
