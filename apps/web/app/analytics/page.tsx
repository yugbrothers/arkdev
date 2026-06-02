import ProductivityChart
from "@/components/charts/ProductivityChart";

import {
  getWorkspaceAnalytics
} from "@/lib/api";

export default async function AnalyticsPage(){

  const analytics =
    await getWorkspaceAnalytics();

  const topWorkspace =
    analytics.length
      ? analytics.sort(
          (a:any,b:any)=>
            b.completionRate -
            a.completionRate
        )[0]
      : null;

  return(

    <main className="max-w-7xl mx-auto p-8">

      <h1 className="text-5xl font-bold mb-8">
        Analytics
      </h1>

      {topWorkspace && (

        <div
          className="
          rounded-3xl
          border
          border-green-500/20
          bg-green-500/5
          p-8
          mb-8
          "
        >

          <div className="text-sm opacity-70">
            Top Workspace
          </div>

          <div className="text-3xl font-black mt-2">
            {topWorkspace.workspaceName}
          </div>

          <div className="mt-4 grid md:grid-cols-4 gap-4">

            <div>
              <div className="opacity-60">
                Projects
              </div>
              <div className="font-bold">
                {topWorkspace.projects}
              </div>
            </div>

            <div>
              <div className="opacity-60">
                Tasks
              </div>
              <div className="font-bold">
                {topWorkspace.tasks}
              </div>
            </div>

            <div>
              <div className="opacity-60">
                Completed
              </div>
              <div className="font-bold">
                {topWorkspace.completed}
              </div>
            </div>

            <div>
              <div className="opacity-60">
                Completion %
              </div>
              <div className="font-bold">
                {topWorkspace.completionRate}%
              </div>
            </div>

          </div>

        </div>

      )}

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
