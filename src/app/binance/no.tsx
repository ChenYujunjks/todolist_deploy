import PriceDisplay from "@/components/api/binance/PriceDisplay";

export default function BinancePage() {
  return (
    <div>
      <h1>Binance Ticker Prices</h1>
      <PriceDisplay symbol="BTCUSDT" />
      <PriceDisplay symbol="ETHUSDT" />
      <PriceDisplay symbol="BNBUSDT" />
      {/* 可以添加更多的交易对 */}
    </div>
  );
}
