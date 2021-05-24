import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetails from './VideoDetails'

export default class App extends React.Component {
  state = {
    videos: [],
    SelectedVideo: null,
  }

  componentDidMount() {
    this.onTermSubmit('react')
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    })

    this.setState({
      videos: response.data.items,
      SelectedVideo: response.data.items[0],
    })
  }

  onVideoSelect = (video) => {
    this.setState({ SelectedVideo: video })
  }

  render() {
    return (
      <div className="bg-dark text-light min-vh-100">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <VideoDetails video={this.state.SelectedVideo} />
            </div>
            <div className="col-md-4">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
