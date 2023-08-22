import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
//import { categoriaProductos, datosProductos } from '../pedidoDeProductos';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase"

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const categoryId = useParams().categoryId;
  

  useEffect(() => {

    const productRef = collection(db,"instrumentos");

    let qu
    if (categoryId) {
      qu = query(productRef, where("categoria", "==", categoryId));
    } else {
      qu = productRef;
    }
   const llamado = getDocs(qu)
      llamado
      .then((resp) =>{
      setProductos( resp.docs.map((doc) =>{
             return (doc.data())
          }))
         
        
      })
  }, [categoryId]);





  
  return (
    <>
      <ItemList key = {productos.id} productos={productos} />
    </>
  );
}

export default ItemListContainer;