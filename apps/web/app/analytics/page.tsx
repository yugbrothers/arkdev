import ProductivityChart
from "@/components/charts/ProductivityChart";

import {
  getAllTasks,
  getProjects,
  getWorkspaces
} from "@/lib/api";

export default async function AnalyticsPage(){

  const tasks =
    await getAllTasks();

  const projects =
    await getProjects();

  const workspaces =
    await getWorkspaces();

  const completed =
    tasks.filter(
      (task:any)=>
        task.status === "done"
    ).length;

  const todo =
    tasks.length - completed;

  const completion =
    tasks.length
      ? Math.round(
          (completed / tasks.length)
          * 100
        )
      : 0;

  return(

    <main className="max-w-7xl mx-auto p-8">

      <h1
        className="
        text-5xl
        font-bold
        mb-8
        "
      >
        Analytics
      </h1>

      <div
        className="
        grid
        md:grid-cols-4
        gap-6
        mb-8
        "
      >

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <div>Projects</div>
          <div className="text-3xl font-bold mt-2">
            {projects.length}
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <div>Workspaces</div>
          <div className="text-3xl font-bold mt-2">
            {workspaces.length}
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <div>Todo</div>
          <div className="text-3xl font-bold mt-2">
            {todo}
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <div>Completion %</div>
          <div className="text-3xl font-bold mt-2">
            {completion}%
          </div>
        </div>

      </div>

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
