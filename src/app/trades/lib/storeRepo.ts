import fs from "fs";
import path from "path";
import { Store, Trade } from "./store";

const STORE_PATH = path.join(process.cwd(), "src", "data", "store.json");

export function getStore(): Store {
  const raw = fs.readFileSync(STORE_PATH, "utf-8");
  return JSON.parse(raw);
}

export function addTrade(trade: Trade) {
  const store = getStore();
  store.trades.push(trade);

  fs.writeFileSync(STORE_PATH, JSON.stringify(store, null, 2));
}
