import StatCard from "@/components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <StatCard title="Projects" value="12" />
        <StatCard title="Tasks" value="48" />
        <StatCard title="Workspaces" value="3" />
      </div>

      <div
        className="
        mt-10
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        "
      >
        <h2 className="text-2xl font-bold mb-4">
          Activity Overview
        </h2>

        <p className="opacity-80">
          Monitor projects, AI workflows,
          analytics and workspace activity.
        </p>
      </div>
    </main>
  );
}
