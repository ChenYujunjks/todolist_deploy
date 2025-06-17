"use client";

import { useEffect, useState } from "react";

export default function BtcPrice() {
  const [price, setPrice] = useState<string>("加载中...");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          "https://api.kraken.com/0/public/Ticker?pair=XBTUSD"
        );
        const data = await response.json();
        setPrice(data.result.XXBTZUSD.c[0]);
      } catch (err) {
        setError("获取价格失败");
      }
    };
    fetchPrice();
  }, []);
  return (
    <div>
      {isLoading ? (
        <p>加载BTC价格...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <p>BTC价格: ${price}</p>
      )}
    </div>
  );
}
