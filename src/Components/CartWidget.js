
import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"


const CartWidget = ()=>{
    const {totalQuantity} = useContext(CartContext)
return(
    <div >
    <Link to='/cart' className="tarjeta" style={{display: totalQuantity>0 ? 'block' :'none'}}>
         
                <img className="cart" src="" alt="carrito" />
                {totalQuantity}
                </Link>    
            
        </div>
)


}

export default CartWidget