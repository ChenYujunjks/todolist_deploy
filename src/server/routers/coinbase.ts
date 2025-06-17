import { publicProcedure, router } from "../trpc";
import axios from "axios";

export const coinbaseRouter = router({
  getBTCPrice: publicProcedure.query(async () => {
    const res = await axios.get(
      "https://api.coinbase.com/v2/prices/BTC-USD/spot"
    );
    return res.data;
  }),

  // 你可以加更多 public API，如：
  getETHPrice: publicProcedure.query(async () => {
    const res = await axios.get(
      "https://api.coinbase.com/v2/prices/ETH-USD/spot"
    );
    return res.data;
  }),
});
