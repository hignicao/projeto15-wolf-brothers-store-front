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
	const promise = axios.post(`${BASE_URL}/signup`, registerForm);
	return promise;
}

function postProduct(productId, body, token) {
	const config = createConfig(token);
	const promise = axios.post(`${BASE_URL}/cart/${productId}`, body, config);
	return promise;
}

function getCartProducts(token) {
	const config = createConfig(token);
	const promise = axios.get(`${BASE_URL}/cart`, config);
	return promise;
}

function deleCartProduct(id, token) {
	const config = createConfig(token);
	const promise = axios.delete(`${BASE_URL}/cart/${id}`, config);
	return promise;
}

function postPurchaseCompletion(body, token) {
	const config = createConfig(token);
	const promise = axios.post(`${BASE_URL}/checkout`, body, config);
	return promise;
}

function getPurchaseHistory(token) {
	const config = createConfig(token);
	const promise = axios.get(`${BASE_URL}/orders`, config);
	return promise;
}

function getProductsByCategory(gender, category) {
	const promise = axios.get(`${BASE_URL}/products/${gender}/${category}`);
	return promise;
}

const api = {
	createConfig,
	getProducts,
	getFilteredProducts,
	getSelectedProduct,
	login,
	register,
	postProduct,
	getCartProducts,
	deleCartProduct,
	postPurchaseCompletion,
	getProductsByCategory,
	getPurchaseHistory,
};

export default api;
