import { Timestamp, collection, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import CheckOutForm from "./checkOutForm";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(false);
    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const objctOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };
            const batch = writeBatch(db);

            const outOfStock = [];


            setLoading(false); 
        } catch (error) {
            console.error("Error al crear la orden:", error);
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Orden en proceso</h1>;
    }
    if (orderId) {
        return <h1>Orden con ID N° : {orderId}</h1>;
    }

    return (
        <div>
            <h1>Checkout</h1>
            {<CheckOutForm onConfirm={createOrder}/> }
        </div>
    );
}

export default Checkout;
