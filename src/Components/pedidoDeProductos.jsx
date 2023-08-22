

import { doc, getDoc, collection} from "firebase/firestore";
import { db } from "./firebase/firebase";





export async function traerProductoPorId(id) {
  const productosCollection = collection(db, "productos");
  const productoDoc = doc(productosCollection, id);
  const resultado = await getDoc(productoDoc);

  if (resultado.exists()) {
    const producto = resultado.data();
    producto.id = resultado.id;
    return producto;
  } else {
    throw new Error("Producto no encontrado");
  }
}