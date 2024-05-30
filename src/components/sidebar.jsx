import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  
  const show= useSelector((store)=>store.app.show)
  // console.log(tryslecter)
  return (
   show&&
    <div className=' p-5 shadow-lg w-40'>
        <h1 className='font-bold'>Subscription</h1>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li>short</li>
        <li>video</li>
        <li>Live</li>
        
      </ul>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>
        
      </ul>
      <h1 className='font-bold pt-5'>watch later</h1>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>
        
      </ul>
    </div>
  )
}

export default Sidebar
