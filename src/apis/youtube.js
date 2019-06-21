import axios from 'axios';

const KEY = 'AIzaSyA84UpHqEcjTwLhyr9FVHPygZi6hf3Zf7w';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
