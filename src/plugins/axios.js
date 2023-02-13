import axios from 'axios';

// export const API_URL = 'http://localhost/api/products/'
export const API_URL = 'https://peaceful-tereshkova.185-243-11-31.plesk.page/api/products/'

export const AXIOS_URL = axios.create({
//baseURL: `http://localhost/api/products/`,
  baseURL: `https://peaceful-tereshkova.185-243-11-31.plesk.page/api/products/`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})