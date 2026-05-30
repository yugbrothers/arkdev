import { getProjects, getWorkspaces } from "@/lib/api";
import StatCard from "./StatCard";

export default async function DashboardStats() {
  const projects = await getProjects();
  const workspaces = await getWorkspaces();

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <StatCard
        title="Projects"
        value={projects.length}
      />

      <StatCard
        title="Workspaces"
        value={workspaces.length}
      />

      <StatCard
        title="Status"
        value="Online"
      />
    </div>
  );
}
