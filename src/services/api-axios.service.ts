import axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://match-career-nodejs-6035d87e1a9b.herokuapp.com/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})