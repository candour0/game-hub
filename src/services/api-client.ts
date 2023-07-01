import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '55566c3e21bf4cb19abac76cba70feed',
  },
});
