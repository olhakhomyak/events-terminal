import React from "react";
import './VideoCard.css';

const VideoCard = ({...video}) => {
  console.log(video, '@@@')
  return (
    <a href='google.com' className='VideoCardContainer'>
      <h1>ololo</h1>
    </a>
  )
}

export default VideoCard;