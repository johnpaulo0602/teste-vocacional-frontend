import axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://teste-vocacional-nestjs.onrender.com',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})