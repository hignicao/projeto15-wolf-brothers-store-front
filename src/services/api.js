import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  return config;
}

function getProducts() {
  const promise = axios.get(`${BASE_URL}/products`);
  return promise;
}
function getFilteredProducts(name) {
  const promise = axios.get(`${BASE_URL}/products/filter/${name}`);
  return promise;
}
const api = {
  getProducts,
  getFilteredProducts,
};

export default api;
