import ProductivityChart
from "@/components/charts/ProductivityChart";

export default function AnalyticsPage() {
  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-8">
        Analytics
      </h1>

      <div
        className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        "
      >
        <ProductivityChart />
      </div>
    </main>
  );
}
