import React, { useState } from "react";

const CheckOutForm = ({ onConfirm }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (name && phone && email) {
            onConfirm({ name, phone, email });
        } else {
            alert("Por favor, completa todos los campos.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Teléfono:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit">Confirmar Orden</button>
        </form>
    );
};

export default CheckOutForm;
