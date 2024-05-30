import React from 'react'

const Videocard = ({info}) => {
    let{snippet,statistics}=info
    let{
        channelTitle
        ,title}=snippet
  return (
    <div className='p-2 m-2 w-72 shadow-md'>
      <img className="rounded-lg" src={info.snippet.thumbnails.medium.url}></img>
      <ul>
        <li className="font-semibold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}views</li>
      </ul>
    </div>
  )
}

export default Videocard
