import React, { useContext, useEffect, useState } from 'react'
import { YT_Api } from '../utils/constant'
import ShimmerUi from './shimmerUi'
import Videocard from './Videocard'
import { Link } from 'react-router-dom'
import AllVideoContext from '../context/all vedio_context'





const videocontainer = () => {
  let[videos,setvideos]=useState([])
  let {allVideoData, setAllVideoData}=useContext(AllVideoContext)
  
  
  
    const getytdata=async()=>
                          {
                      const data=await fetch(YT_Api)
                      const jsonData=await data.json()
                      
                     setvideos(jsonData.items)
                     setAllVideoData(jsonData.items)

                     }     




useEffect(()=>{getytdata(); },[])

  return (
    !videos
    ?
    <div>
      <ShimmerUi/>
    </div>
    :<div className='flex flex-wrap p-16'>{
    videos.map((video) => (<Link key={video.id} to={"/watch?v="+video.id}><Videocard key={video.id} allinfo={videos} info={video}/></Link>))}
    </div>
    )
  
}
export default videocontainer







// const Videocontainer = () => {
//   //  const getytdata=async()=>{
//   //   const data=await fetch(YT_Api)
//   //   const jsonData=await data.json()
//   //   console.log(jsonData)}

//   // useEffect(()=>{getytdata()},[])

//   return(
//     <>
//     {/* <ShimmerUi/> */}
//     </>
//   )
  
// }


