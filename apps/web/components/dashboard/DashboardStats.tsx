import {
  getProjects,
  getWorkspaces,
  getAllTasks
} from "@/lib/api";

import StatCard from "./StatCard";

export default async function DashboardStats(){

  const projects =
    await getProjects();

  const workspaces =
    await getWorkspaces();

  const tasks =
    await getAllTasks();

  const completed =
    tasks.filter(
      (task:any)=>
        task.status === "done"
    ).length;

  return(

    <div
      className="
      grid
      md:grid-cols-4
      gap-6
      "
    >

      <StatCard
        title="Projects"
        value={projects.length}
      />

      <StatCard
        title="Workspaces"
        value={workspaces.length}
      />

      <StatCard
        title="Tasks"
        value={tasks.length}
      />

      <StatCard
        title="Completed"
        value={completed}
      />

    </div>

  );

}
