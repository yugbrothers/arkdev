import GlobalSearch from "@/components/search/GlobalSearch";
import DashboardStats from "@/components/dashboard/DashboardStats";
import ActivityFeed from "@/components/activity/ActivityFeed";
import { getProjects } from "@/lib/api";

export default async function DashboardPage() {
  const projects = await getProjects();

  return (
    <main className="max-w-7xl mx-auto p-8">

      <GlobalSearch />
      <h1 className="text-5xl font-bold mb-8">
        ArkDev Dashboard
      </h1>

      <DashboardStats />

      <div className="mt-10 grid gap-6">
        {projects.map((project: any) => (
          <div
            key={project.id}
            className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-6
            "
          >
            <h2 className="text-xl font-bold">
              {project.name}
            </h2>

            <p className="opacity-70 mt-2">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
