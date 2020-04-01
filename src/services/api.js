import axios from 'axios';

const devServer = 'http://localhost:3333';
const prodServer = 'https://app-be-hero.herokuapp.com';

const api = axios.create({
    baseURL: prodServer,
});

export default api;