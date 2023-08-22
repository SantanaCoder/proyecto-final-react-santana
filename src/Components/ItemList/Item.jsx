import { Link } from 'react-router-dom'

const Item = ({productos}) => {
  return (
         
     
      <div className=" font-medium text-center tarjeta">
         <h2>{productos.title}</h2>
        <img className='image' src={productos.image} alt={productos.title}/>
          <p>${productos.price}</p>
            <h4>Stock Disponible  {productos.stock}</h4>


      <div >
      <Link to={`/item/${productos.id}`} className="boton">
          Detalle de Producto
        </Link>
      </div>
    </div>
    


  

      

  )
}

export default Item