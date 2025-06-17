import { publicProcedure, router } from "../trpc";
import { z } from "zod";
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

  getCurrencies: publicProcedure.query(async () => {
    const res = await axios.get("https://api.coinbase.com/v2/currencies");
    return res.data;
  }),

  getExchangeRates: publicProcedure
    .input(z.object({ base: z.string().min(1) }))
    .query(async ({ input }) => {
      const res = await axios.get(
        `https://api.coinbase.com/v2/exchange-rates`,
        { params: { currency: input.base } }
      );
      return res.data;
    }),

  getSpotPrice: publicProcedure
    .input(z.object({ base: z.string(), quote: z.string() }))
    .query(async ({ input }) => {
      const { base, quote } = input;
      const res = await axios.get(
        `https://api.coinbase.com/v2/prices/${base}-${quote}/spot`
      );
      return res.data;
    }),

  getBuyPrice: publicProcedure
    .input(z.object({ base: z.string(), quote: z.string() }))
    .query(async ({ input }) => {
      const res = await axios.get(
        `https://api.coinbase.com/v2/prices/${input.base}-${input.quote}/buy`
      );
      return res.data;
    }),

  getSellPrice: publicProcedure
    .input(z.object({ base: z.string(), quote: z.string() }))
    .query(async ({ input }) => {
      const res = await axios.get(
        `https://api.coinbase.com/v2/prices/${input.base}-${input.quote}/sell`
      );
      return res.data;
    }),
});
