// lib/binanceAxios.ts
import axios from 'axios';

const binanceApi = axios.create({
  baseURL: 'https://api.binance.com',
  timeout: 5000,
});

binanceApi.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error('[Binance API ERROR]', error);
    return Promise.reject(error);
  }
);

export default binanceApi;
