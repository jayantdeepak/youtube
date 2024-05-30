import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { togglereply } from '../utils/showreplies'

const commentdata=[
    {name:"jayant deepak",
    comment:"lorem ipsum xyz jdjd",
    replies:[]},

    {name:"jayant deepak",
    comment:"lorem ipsum xyz jdjd",

    replies:[
        {name:"jayant deepak",
       comment:"lorem ipsum xyz jdjd",
         replies:[]},

    {name:"jayant deepak",
    comment:"lorem ipsum xyz jdjd",
    replies:[ {name:"jayant deepak",
    comment:"lorem ipsum xyz jdjd",
    replies:[]},

    {name:"jayant deepak",
    comment:"lorem ipsum xyz jdjd",
    replies:[]},

    {name:"jayant deepak",
    comment:"lorem ipsum xyz jdjd",
    replies:[]},]},
    
    {name:"jayant deepak",
    comment:"lorem ipsum xyz jdjd",
    replies:[]} 
    ,]},

    {name:"jayant deepak",
    comment:"lorem ipsum xyz jdjd",
    replies:[]},

    {name:"jayant deepak",
    comment:"lorem ipsum xyz jdjd",
    replies:[]},

    {name:"jayant deepak",
    comment:"lorem ipsum xyz jdjd",
    replies:[]},
]





const Comment=({data})=>{

    const dispatch=useDispatch()

    let handleReplyToggle=()=>{dispatch(togglereply());console.log("gghjgj")}
    let booleanval=useSelector((store)=>store.reply.show) 

    
    return(
    <div className="bg-slate-200 shadow-xl p-3 mb-2">
        
            <div className='flex justify-between '>
                <div className='flex justify-between'>
                     <img className='h-6 mt-3' src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid" alt=""></img>
                     <div className='ml-3'>
                        <div className='font-bold'>{data.name}</div>
                        <div>{data.comment}</div>
                     </div>
                </div>
            
            <div> {data.replies != ""&&<img className='h-5' onClick={handleReplyToggle} src={!booleanval?'https://cdn-icons-png.flaticon.com/512/60/60995.png':"https://www.svgrepo.com/show/93813/up-arrow.svg"}></img> }</div>
            </div>
        </div>
    
    )
}

const Commentlist=({comments})=>{
    let booleanval=useSelector((store)=>store.reply.show) 
   
    return(
comments.map(comment=><><div><Comment data={comment}/></div>
<div className='pl-5 border-l-black ml-5'>
  {booleanval&& <Commentlist comments={comment.replies}/> }
    </div> 
</>))}
     
    
const Commentscontainer = () => {
  return (
    <div className='m-5 w-7/12 p-2'>
        <h1 className='text-2xl font-bold'>Commentss</h1>
        <Comment data={commentdata[0]}/>
        
        <Commentlist comments={commentdata}/>

      
    </div>
  )
}

export default Commentscontainer
