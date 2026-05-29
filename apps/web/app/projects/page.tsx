import { getProjects } from "@/lib/api";

export default async function ProjectsPage() {

  const projects =
    await getProjects();

  return (
    <main className="p-8">

      <h1 className="text-4xl font-bold">
        Projects
      </h1>

      <div className="mt-8 space-y-4">

        {projects.map(
          (project: any) => (
            <div
              key={project.id}
              className="border border-zinc-800 rounded-xl p-6"
            >
              <h2 className="text-2xl">
                {project.name}
              </h2>

              <p className="mt-2">
                {project.description}
              </p>
            </div>
          )
        )}

      </div>

    </main>
  );
}
