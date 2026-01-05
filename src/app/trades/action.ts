"use server";

import { addTrade } from "./lib/storeRepo";
import { Trade } from "./lib/store";

export async function addTradeAction(trade: Trade) {
  addTrade(trade);
}
