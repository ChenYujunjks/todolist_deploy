import { CashflowChart } from "./components/chart";
import { CashflowTable } from "./components/table";

export default function StipendPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">资金余额追踪</h1>
      <CashflowChart />
      <CashflowTable />
    </div>
  );
}
