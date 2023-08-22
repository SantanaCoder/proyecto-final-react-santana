import Item from "./Item"

const ItemList = (props) => {
  return (
    
    <div className="space-x-4 bg-[#78716c] tarjetas">
      { props.productos.map((prod) =>  <Item  key={prod.id} productos={prod} /> )}
      
    </div>
  )
}

export default ItemList 