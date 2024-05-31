import React from 'react'

const Chatmessage = ({name,message}) => {
  console.log(message)
  return (
    <li className=" gap-2 mt-5 flex pl-10"style={{listStyleType:'none'}}><img className='h-5'
    src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid"/>
    <span className="font-bold pr-4">{name}</span>{message}jjh</li>
  )
}

export default Chatmessage
