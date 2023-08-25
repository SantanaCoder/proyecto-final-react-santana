
import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"


const CartWidget = ()=>{
    const {quantity, cart} = useContext(CartContext)
return(
    <div >
        <Link to='/cart' style={{display: quantity>0 ? 'block' :'none'}}>
            {cart.map((item) =>(<img className="cart" src={item.image} alt="carrito"/>
                ))}
               <div className="number">
                   {quantity}
               </div> 
        </Link>    
            
    </div>
)

}

export default CartWidget