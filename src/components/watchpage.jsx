import React, { useContext, useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import { closeMenu } from '../utils/appslice'
import { Link, useSearchParams } from 'react-router-dom'
import Commentscontainer from './commentscontainer';
import Side_recommendedVideoCard from './Side_recommendedVideoCard'
import AllVideoContext from '../context/all vedio_context'
import { addmessage } from '../utils/livechatclice'



import Livechatcontainer from './Livechatcontainer';



const Watchpage = () => {

  let [Lchat,setlivechat]=useState("")
  let [searchParams] = useSearchParams() 
  let id=searchParams.get("v")
  let dispatch=useDispatch()
  

  useEffect(()=>{dispatch(closeMenu())},[])

  let addtolivechat=()=>{
    Lchat != ""&&
    dispatch(addmessage({
      name:"jayant",
      message:Lchat
    }
     )
      )
      setlivechat("")

  }
    
    


let {allVideoData}=useContext(AllVideoContext)
// console.log(allVideoData)
 
  return (
  <div >
    <div className='flex flex-2 pl-8 '>
      <div className='p-4 shadow-lg'>
          <iframe className='iframe' 
             
              src={"https://www.youtube.com/embed/"+id}
              title="YouTube video player"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin"
              >
            
          </iframe>
      </div >
      <div className='flex  flex-1 flex-col'>
           <div className='flex-1 h-[500 px ] mr-5'><Livechatcontainer/></div>
           <div className='flex'><input className=' flex-1 border h-10  shadow-xl text-center'value={Lchat} onChange={(e)=>{setlivechat(e.target.value)}} placeholder='send to live chat'></input>
           <button className='h-10 w-20 shadow-lg text-center ' onClick={addtolivechat}>send</button></div>
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
