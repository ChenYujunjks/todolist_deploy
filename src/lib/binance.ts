// lib/binance.ts
import binanceApi from './binanceAxios';

export async function fetchPing() {
  return (await binanceApi.get('/api/v3/ping')).data;
}

export async function fetchServerTime() {
  return (await binanceApi.get('/api/v3/time')).data;
}

export async function fetchExchangeInfo(symbol?: string) {
  return (
    await binanceApi.get('/api/v3/exchangeInfo', {
      params: symbol ? { symbol } : undefined,
    })
  ).data;
}

export async function fetchDepth(symbol: string, limit = 100) {
  return (
    await binanceApi.get('/api/v3/depth', {
      params: { symbol, limit },
    })
  ).data;
}

export async function fetchTrades(symbol: string, limit = 100) {
  return (
    await binanceApi.get('/api/v3/trades', {
      params: { symbol, limit },
    })
  ).data;
}

export async function fetchAggTrades(symbol: string, limit = 100) {
  return (
    await binanceApi.get('/api/v3/aggTrades', {
      params: { symbol, limit },
    })
  ).data;
}

export async function fetchKlines(symbol: string, interval = '1h', limit = 100) {
  return (
    await binanceApi.get('/api/v3/klines', {
      params: { symbol, interval, limit },
    })
  ).data;
}

export async function fetchTickerPrice(symbol?: string) {
  return (
    await binanceApi.get('/api/v3/ticker/price', {
      params: symbol ? { symbol } : undefined,
    })
  ).data;
}

export async function fetchBookTicker(symbol?: string) {
  return (
    await binanceApi.get('/api/v3/ticker/bookTicker', {
      params: symbol ? { symbol } : undefined,
    })
  ).data;
}

export async function fetch24hrTicker(symbol?: string) {
  return (
    await binanceApi.get('/api/v3/ticker/24hr', {
      params: symbol ? { symbol } : undefined,
    })
  ).data;
}

export async function fetchAvgPrice(symbol: string) {
  return (
    await binanceApi.get('/api/v3/avgPrice', {
      params: { symbol },
    })
  ).data;
}
