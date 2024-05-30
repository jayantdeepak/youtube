import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appslice'
import { useSearchParams } from 'react-router-dom'
import generateRandomText from '../helperfunction/random_msg'
import Commentscontainer from './commentscontainer';

const Watchpage = () => {
  let[livechat,setlivechat]=useState([])
  const [searchParams] = useSearchParams()
// console.log(searchParams.get("v"))
let id=searchParams.get("v")


  let dispatch=useDispatch()

  useEffect(()=>{
    dispatch(closeMenu())

    setInterval(()=>{
      let text=generateRandomText(20)
      
    setlivechat(prev=>[...prev,text])
    },2000000)
    

  },[])
  console.log(livechat)
  return (<div><div className='flex justify-evenly'><div><iframe className='p-4 shadow-lg'
  width="800"
   height="400"
    src={"https://www.youtube.com/embed/"+id}
     title="YouTube video player"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin"
       allowfullscreen></iframe>

   
 </div>
      <div className='w-100% flex-col h-96 shadow-2xl border-blue-950 mx-24 flex-1 text-center'>
           <div className='flex justify-center align-middle h-10 bg-slate-200'>live chat</div>
           <div className="flex flex-col-reverse overflow-y scroll-m-0">
            {livechat.map(each=><li  style={{listStyleType:'none'} }>{each}</li>)}
            </div>
  </div>
  
 </div>
 <Commentscontainer/>
 </div>
  )
}

export default Watchpage
