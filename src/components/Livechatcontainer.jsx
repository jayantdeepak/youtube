import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import generate from '../helperfunction/random_name'
import generateRandomText from '../helperfunction/random_msg'
import Chatmessage from './Chatmessage'
import { addmessage } from '../utils/livechatclice'

const Livechatcontainer = () => {
    let dispatch=useDispatch()
    let livemessage=useSelector((store)=>store.chat.messages)

    useEffect(()=>{
        
        let i= setInterval(()=>{
        dispatch(addmessage({
      name:generate(),
      message:generateRandomText(10)
    }
     )
      )
        // console.log(livemessage)
        return()=> clearInterval(i)},1500)},[])


  return (<><div className='font-bold' >Live chat</div>
    <div className='w-full flex flex-col-reverse h-[600px] ml-2 border mr-1.5 border-black bg-slate-100 rounded-md overflow-y-scroll'>
      {livemessage.map(each=> <Chatmessage name={each.name} message={each.message}/>)}
    </div>
    </>
  )
}

export default Livechatcontainer
