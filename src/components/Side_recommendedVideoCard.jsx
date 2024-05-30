import React from 'react'

const Side_recommendedVideoCard = ({info}) => {
  return (
    <div className='flex justify-center align-middle p-2 m-2  shadow-md'>
        <div className='w-4/12'><img className="pt-4 rounded-lg " src={info.snippet.thumbnails.medium.url}></img></div>
    
    <ul className='p-2 w-8/12'>
      <li className="font-semibold">{info.snippet.title}</li>
      <li>{info.snippet.channelTitle}</li>
      <li>{info.statistics.viewCount}views</li>
    </ul>
  </div>
      
    
  )
}

export default Side_recommendedVideoCard
