import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appslice'
import { Link, useSearchParams } from 'react-router-dom'
import generateRandomText from '../helperfunction/random_msg'
import Commentscontainer from './commentscontainer';
import generate from '../helperfunction/random_name'
import Side_recommendedVideoCard from './Side_recommendedVideoCard'
import AllVideoContext from '../context/all vedio_context'

const Watchpage = () => {
  let[livechat,setlivechat]=useState([])
  let [randomName,setRandomName]=useState([])
  let [searchParams] = useSearchParams() 
  let id=searchParams.get("v")
  let dispatch=useDispatch()

  useEffect(()=>{


    dispatch(closeMenu())

    const i=setInterval(()=>{
          
        let text=generateRandomText(20)
          let rdmname=generate()
         // setRandomName(prev=>[...prev,rdmname])
           randomName.push(rdmname)
          setlivechat(prev=>[...prev,text])
                             },200000)

       return()=> clearInterval(i)
    
  },[])

let {allVideoData}=useContext(AllVideoContext)
console.log(allVideoData)
 
  return (
  <div >
    <div className='flex flex-2 pl-8 justify-between'>
      <div className='p-4 shadow-lg'>
          <iframe className='iframe' 
             
              src={"https://www.youtube.com/embed/"+id}
              title="YouTube video player"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin"
              >
            
          </iframe>
      </div>
      <div className=' livechat flex-col  overflow-y-scroll h-6/12 shadow-2xl  text-center'>
           <div className='flex justify-center align-middle h-10 bg-slate-200'>live chat
           </div>
           <div className="flex flex-col-reverse h-12/12 overflow-y ">
               {livechat.map(each=>
               <li  style={{listStyleType:'none'} }>
              <img className='h-3'
               src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid"/>
               {each}</li>)}
            </div>
       </div>
  
   </div>
   <div className='flex justify-between mr-3'> 
    <Commentscontainer/>
    <div className='bg-slate-200 mt-16 w-5/12 h-12/12'>
     
      {allVideoData.map(info=><Link to={"/watch?v="+info.id}><Side_recommendedVideoCard info={info} /></Link>)}
      
      
    </div>
    </div>

 </div>
  )
}

export default Watchpage
