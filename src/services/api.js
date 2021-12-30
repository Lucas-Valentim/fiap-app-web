import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8088',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      'Access-Control-Allow-Origin': '*'},
    responseType: 'json',
    withCredentials: false,
    
  });
 
  export default api;