import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    let err=useRouteError()
  return (
    <div>
      somthing went wrong:{err.message}
    </div>
  )
}

export default Error
