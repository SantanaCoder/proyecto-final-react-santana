

import CartWidget from "./CartWidget"
import { NavLink, Link } from "react-router-dom"


function NavBar() {
  return (
    <nav className=" py-4 px-6 text-sm font-medium flex justify-between items-center">
      <Link to= '/'>
        <h1 className="space-x-3 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#cbd5e1] to-[#075985]">
          Santana Store
        </h1>
      </Link>
      <ul className="flex flex-wrap space-x-8 ">
          <NavLink to = {`/`}>Home</NavLink>
          <NavLink to = {`/categoria/cuerdas`}>Cuerdas</NavLink>
          <NavLink to = {`/categoria/percusion `} >Percusion</NavLink>
          <NavLink to = {`/categoria/vientos `}>Vientos</NavLink>
     </ul>
          <CartWidget image='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png'/>
    </nav>
  )
}

export default NavBar