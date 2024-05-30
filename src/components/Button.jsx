import React from 'react'

const Button = ({category}) => {
  return (
    <div>
      <button className=' px-5 py-2 m-2 bg-slate-200 rounded-lg'>{category}</button>
    </div>
  )
}

export default Button
