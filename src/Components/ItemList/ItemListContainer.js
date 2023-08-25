import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const productRef = collection(db, "instrumentos");

    let qu;
    if (categoryId) {
      qu = query(productRef, where("categoria", "==", categoryId));
    } else {
      qu = productRef;
    }

    const fetchProductos = async () => {
      try {
        const querySnapshot = await getDocs(qu);
        const productsData = querySnapshot.docs.map((doc) => doc.data());
        setProductos(productsData);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProductos();
  }, [categoryId]);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
