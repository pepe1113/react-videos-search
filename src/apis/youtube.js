import axios from 'axios'
const KEY = 'AIzaSyAG-9nF5eLHAkLUjD9uNtmDTAZVHsbdnnY'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    q: 'surfing',
    key: KEY,
  },
})
