import { useState, useEffect } from "react"
import { idProductos } from "../products"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {


  const [detalle, setDetalle] = useState(null)
 const {id} = useParams

  useEffect(() => {
    idProductos(id)
      .then(res => {
        setDetalle(res)
          })
      .catch (err => { console.log("err") })    

  }, [id])



  return (
    <div>
      <ItemDetail detalle= {detalle}/>
    </div>
  )
}

export default ItemDetailContainer




/*
import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { traerProductoPorId } from "../pedidoDeProductos";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const id = useParams().id;

  useEffect(() => {
    async function obtenerProducto() {
      try {
        const producto = await traerProductoPorId (id);
        setDetalle(producto);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    }

    obtenerProducto();
  }, [id]);

  return (
    <div>
      {detalle && <ItemDetail detalle={detalle} />}
    </div>
  );
};

export default ItemDetailContainer;*/




/*///////////////////// original

import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { doc, getDoc} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
  

  const [detalle, setDetalle] = useState(null)
 
  const  id = useParams().id

  useEffect(() => {     
    
   
   
    const docRef = doc(db,"instrumentos", id);
    getDoc(docRef)
    .then((resp) => {
      setDetalle(
        {...resp.data(), id: resp.id}
      );
    })
    .catch((error) => {
      console.error("Error al obtener el producto:", error);
    });
  }, [id])

 

  return (
    <div>
      {detalle && <ItemDetail detalle= {detalle}/>}
    </div>
  )
}

export default ItemDetailContainer*/
