// hooks/useTickerPrice.ts
import useSWR from 'swr';
import { fetchTickerPrice } from '@/lib/binance';

export default function useTickerPrice(symbol: string) {
  const { data, error, isLoading } = useSWR(
    symbol ? ['tickerPrice', symbol] : null,
    () => fetchTickerPrice(symbol),
    { refreshInterval: 30000 } // 每 30 秒刷新一次
  );

  return {
    price: data?.price,
    isLoading,
    isError: !!error,
  };
}
