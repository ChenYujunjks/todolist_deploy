// components/PriceDisplay.tsx
"use client";
import useTickerPrice from "@/hooks/useTickerPrice";

export default function PriceDisplay({ symbol }: { symbol: string }) {
  const { price, isLoading, isError } = useTickerPrice(symbol);

  if (isLoading) return <div>Loading price for {symbol}...</div>;
  if (isError) return <div>Failed to load price</div>;

  return (
    <div>
      {symbol} Price: ${parseFloat(price).toFixed(2)}
    </div>
  );
}
