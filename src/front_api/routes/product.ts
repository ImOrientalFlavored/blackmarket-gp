const BASE_URL = 'http://localhost:3000';
const API_URL = BASE_URL + '/api';
const V1_URL = API_URL + '/v1';

export const getProducts = async () => {
    const response = await fetch(`${V1_URL}/products`);
    const data = await response.json();
    return data;
}

export const getProductById = async (id:number) => {
    const response = await fetch(`${V1_URL}/products/${id}`);
    const data = await response.json();
    return data;
}