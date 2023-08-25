import React, { useContext, useState } from "react";
import { Timestamp} from "firebase/firestore";

import { CartContext } from "../CartContext";
import { v4 as uuidv4 } from "uuid";
import CheckOutForm from "./CheckOutForm";


const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const { cart, clearCart } = useContext(CartContext); 

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const orderObject = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: calculateTotal(cart), 
        date: Timestamp.fromDate(new Date()),
      };

     
      setTimeout( () => {
        setLoading(false);
        const generatedOrderId = uuidv4();
        setOrderId(generatedOrderId);
        clearCart(); 
      }, 2000); 

    } catch (error) {
      console.error("Error al crear la orden:", error);
      setLoading(false);
    }
  };

  const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (loading) {
    return <h1 className="tarjeta">Orden en proceso</h1>;
  } 

  if (orderId) {
    return <h1 className="tarjeta ">Orden con ID N° : {orderId}  <h3 className="space-x-3 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#cbd5e1] to-[#075985]">Gracias por tu compra</h3>
    </h1>
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckOutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;

