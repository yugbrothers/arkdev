import { getProjects, getTasks } from "@/lib/api";

export default async function DashboardPage() {

  const projects = await getProjects();

  let tasks: any[] = [];

  if (projects.length > 0) {
    tasks = await getTasks(projects[0].id);
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="max-w-7xl mx-auto p-10">

        <h1 className="text-5xl font-bold">
          ArkDev Dashboard
        </h1>

        <p className="text-zinc-400 mt-3">
          Connected to PostgreSQL via Prisma API
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <section className="border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-3xl font-semibold mb-6">
              Projects
            </h2>

            {projects.map((project: any) => (
              <div
                key={project.id}
                className="border border-zinc-700 rounded-xl p-4 mb-4"
              >
                <h3 className="text-xl font-semibold">
                  {project.name}
                </h3>

                <p className="text-zinc-400">
                  {project.description}
                </p>
              </div>
            ))}
          </section>

          <section className="border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-3xl font-semibold mb-6">
              Tasks
            </h2>

            {tasks.map((task: any) => (
              <div
                key={task.id}
                className="border border-zinc-700 rounded-xl p-4 mb-4"
              >
                <h3 className="font-semibold">
                  {task.title}
                </h3>

                <p className="text-zinc-400">
                  {task.status}
                </p>
              </div>
            ))}
          </section>

        </div>

      </div>

    </main>
  );
}
