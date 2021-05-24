import React from 'react'

const VideoDetails = ({ video }) => {
  if (!video) {
    return 'Loading'
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div className="row mt-3">
      <div className="ratio ratio-16x9 mb-3">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="py-2">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetails
