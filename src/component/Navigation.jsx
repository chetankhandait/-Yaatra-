import React from 'react'
import {NavLink} from "react-router-dom"
const Navigation = () => {
  return (
    <div className='flex gap-3 '>
    
    
    
    
    
    <NavLink to="/list">
        <h2 className='bg-black text-slate-100 px-2 py-2 rounded-md my-3' > List View  </h2>
    </NavLink>
    <NavLink to="/map">
        <h2 className='bg-black text-slate-100 px-2 py-2 rounded-md my-3'> Map View  </h2>
    </NavLink>
    
    </div>
      
    
  )
}

export default Navigation
