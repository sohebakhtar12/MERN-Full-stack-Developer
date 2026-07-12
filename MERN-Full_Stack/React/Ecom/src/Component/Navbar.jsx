
import {NavLink,useNavigate} from 'react-router-dom'
import logo from "../assets/logo.png"
import { useEffect, useState } from 'react';
function Navbar({cart}) {
  
  const [totalItems,setTotalItems]=useState(0)
  useEffect(()=>{
    let temp=0

    for(let item of cart){
        temp += item.q
    }
    setTotalItems(temp)
  },[cart])


   const nav = useNavigate();
  return (
   <nav className="sticky top-0 z-50 flex items-center justify-between bg-green-400 text-white p-3 shadow-md">
    

      <div className="flex items-center gap-2">
        <img
          onClick={() => nav("/")}
          src={logo}
          alt="E-Commerce Logo"
          className="h-10 w-10 rounded-full object-cover"
        />
         
          
        <h2 onClick={()=>nav("/")} className="text-2xl font-bold" >AccioKart</h2>
      </div>

    <div className='flex gap-3'>

        <NavLink to={'/products'} className={({ isActive }) =>
        
            `px-3 py-1 rounded ${
              isActive ? "bg-green-800" : "hover:bg-green-600"
            }`
          }> Product</NavLink>
        <NavLink
  to="/cart"
  className={({ isActive }) =>
    `relative px-3 py-2 rounded flex items-center gap-2 ${
      isActive ? "bg-green-800" : "hover:bg-green-600"
    }`
  }
>
  🛒 Cart

  {totalItems > 0 && (
    <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold">
      {totalItems}
    </span>
  )}
</NavLink>
        <NavLink to={'/profile'}  className={({ isActive }) =>
            `px-3 py-1 rounded ${
              isActive ? "bg-green-800" : "hover:bg-green-600"
            }`
          }>Profile</NavLink>
    </div>
   </nav>
  )
}

export default Navbar
