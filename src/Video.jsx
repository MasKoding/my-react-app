import React from 'react'
import Thumbnail from './Thumbnail'
import LikeButton from './LikeButton'

const Video = (props) => {
    const {title,description,src} = props
  return (
    <div className='flex content-between bg-white p-4 my-2' style={{width:'100%'}}>
    <div className='flex-1'>
        <Thumbnail video={src}/>
     
    </div>
    <div className='flex-1 px-3'>
    <a href='#' className='py-3'>
        {title}  
      </a>
      <p className='text-blue-500'>{description}</p>
    
     
    </div>
      <LikeButton/>
    </div>
  )
}

export default Video
