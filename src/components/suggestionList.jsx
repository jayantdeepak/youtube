import React from 'react'

const SuggestionList = ({data}) => {
  console.log(data)
  return (
    <ul>
        {data.map(each=><li>{each}</li>)}
    </ul>
      
    
  )
}

export default SuggestionList
