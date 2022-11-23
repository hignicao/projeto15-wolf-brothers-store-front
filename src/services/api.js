import axios from "axios";



const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  return config;
}

function getProducts(){
    const promise = axios.get(`${BASE_URL}/products`);
    return promise;
}

const api = {
    getProducts
}

export default api;