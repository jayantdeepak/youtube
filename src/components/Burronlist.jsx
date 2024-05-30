import React from 'react'
import Button from './Button'

const Buttonlist = () => {
  return (
    <div className='flex'>
      <Button category={"All"}/>
      <Button category={"Recommended"}/>
      <Button category={"Sports"}/>
      <Button category={"Codinig"}/>
      <Button category={"Trading"}/>
      <Button category={"Anime"}/>
      <Button category={"Fire"}/>
      <Button category={"Trending"}/>
      
    </div>
  )
}

export default Buttonlist
