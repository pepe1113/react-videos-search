import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
  state = {
    input: '',
  }

  onInputChange = (e) => {
    this.setState({
      input: e.target.value,
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onFormSubmit(this.state.input)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="container mb-3 p-0 py-3">
          <div className="d-flex align-items-center pb-2">
            <span className="material-icons text-warning me-2">play_circle_filled</span>
            <label className="form-label h1">Video Search</label>
          </div>
          <input
            className="form-control bg-dark"
            value={this.state.input}
            onChange={this.onInputChange}
            type="text"
            placeholder="Video Search..."
          />
        </form>
      </div>
    )
  }
}

export default SearchBar
