import React, { useEffect, useState } from 'react'
import { Link, NavLink, json, useHref } from 'react-router-dom'
import { yt_result1_url } from '../utils/constant'

const Serchresultindividual = ({item}) => {
    let [link,setlink]=useState("")
    
    useEffect(()=>{let generatedlink=yt_result1_url+item; setlink(generatedlink)},[])
    


  return (
  <a href={link}><li  style={{listStyleType:'none'} }>{item} </li>
      </a> 
)
}

export default Serchresultindividual
