import BasicObjectSection from "./components/BasicObjectSection";
import RangeSection from "./components/RangeSection";
import TransformSection from "./components/TransformSection";

export default function ZodLabPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold">Zod 基础实验页</h1>
      <BasicObjectSection />
      <RangeSection />
      <TransformSection />
    </main>
  );
}
