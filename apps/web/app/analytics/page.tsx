import StatCard from "@/components/dashboard/StatCard";

export default function AnalyticsPage() {
  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Analytics
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        <StatCard title="Users" value="152" />
        <StatCard title="Projects" value="31" />
        <StatCard title="Tasks" value="487" />
        <StatCard title="AI Requests" value="1200" />
      </div>
    </main>
  );
}
