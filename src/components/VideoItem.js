import React from 'react'
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="list-group-item video-item px-0 py-3 bg-dark text-light border-secondary"
      onClick={() => onVideoSelect(video)}
    >
      <img alt={video.snippet.title} className="me-2" src={video.snippet.thumbnails.medium.url} />
      <div className="small fw-bold">{video.snippet.title}</div>
    </div>
  )
}

export default VideoItem
