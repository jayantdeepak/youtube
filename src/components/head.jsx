import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import  { togglemenu } from '../utils/appslice'
import { yt_serach_sugestion_API } from '../utils/constant'
import { Link } from 'react-router-dom';

import { addsuggestion } from '../utils/serachslice';
import store from '../utils/store';
import Serchresultindividual from './serchresultindividual';




const Head = () => {
  let[sug,setsug]=useState([])
  let[searchQuery,setSerchQuery]=useState("")
  let[SuggestionList,setshowsuggestionlist]=useState(false)
  
  const dispatch=useDispatch()
//  console.log(searchQuery)
  const tryslecter= useSelector((store)=>store.app.try)
  // const suggest=useSelector((store)=>store.search)
  let toggleMenuHandler=()=>{
    dispatch(togglemenu())}
    // console.log(tryslecter)

    function handleResponse(response) {
      // Extracting the JSON part from the response
      var jsonString = response.substring(response.indexOf('['), response.lastIndexOf(']') + 1);
  
      // Parse the JSON string
      var data = JSON.parse(jsonString);
      
       let sirf_naam=  data[1].map(function(subArray){return subArray[0]})
          // console.log(sirf_naam)
          return sirf_naam
      // });[]
  }
  function fetchdata(){
    
    fetch((yt_serach_sugestion_API+searchQuery))
    .then((data)=>data.text())
    .then((jd)=>{setsug(handleResponse(jd))})
    .catch((err)=>console.log(err.message))}

    useEffect(()=>{ 
      let timmer=setTimeout(() => {
        
        fetchdata()
      }, 300);
      
     return ()=>clearTimeout(timmer) 
  
    
    
    },[searchQuery])



// console.log(sug)
 
  
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg '>
      <div className='flex col-span-1 '>
         <img onClick={toggleMenuHandler} className='h-8' src="https://blog.hubspot.com/hs-fs/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png" alt="" />
         <img className='ml-8 h-8' src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-logo-icon.png'></img>
      </div>
    <div className='flex-col' >
      <div className='flex justify-center col-span-10'>
        <input className='w-full border h-10 border- shadow-lg text-center rounded-tl-full rounded-bl-full
       ' type='text' placeholder='serach'
       onFocus={()=>{setshowsuggestionlist(true)}}
       onBlur={()=>{setshowsuggestionlist(false);setSerchQuery("")}}
       value={searchQuery}
       onChange={(e)=>{setSerchQuery(e.target.value)}}
       
       ></input>
       <button className='h-10 w-20 shadow-lg text-center rounded-tr-full rounded-br-full'>search</button>
       </div>
       <div className=" absolute px-7 w-4/12 bg-slate-100 shadow-2xl">
        {sug.map(
          each=>sug&&
            <Serchresultindividual item={each}/>
            
              
              )
              }
        </div>
       
    </div >
    <div className='flex flex-row-reverse col-span-1'>
       <img className='h-8' src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid" alt="" />
    </div>
    </div>
  )
}

export default 
Head
