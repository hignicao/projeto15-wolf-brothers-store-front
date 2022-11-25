import axios from "axios";
import { BASE_URL } from "../constants/urls";

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

function getSelectedProduct(id) {
	const promise = axios.get(`${BASE_URL}/products/${id}`);
	return promise;
}

function login(loginForm) {
	const promise = axios.post(`${BASE_URL}/signin`, loginForm);
	return promise;
}

function register(registerForm) {
	const promise = axios.post(`${BASE_URL}/signup`, registerForm)
	return promise
}

const api = {
	createConfig,
	getProducts,
	getFilteredProducts,
	getSelectedProduct,
	login,
	register
};

export default api;
