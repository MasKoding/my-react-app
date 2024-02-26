import React from 'react'
import ReactPlayer from 'react-player'

const Thumbnail = (props) => {

  const {src} = props  
  return (
    <>
    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameBorder='0'
        width={360}
        height={160}
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
    </>
  )
}

export default Thumbnail
