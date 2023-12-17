import axios from 'axios';

const fakestoreapi = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  headers: { 'X-Custom-Header': 'foobar' },
});

export default fakestoreapi;
