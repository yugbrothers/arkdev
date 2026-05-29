import { generateProject } from "@/lib/api";

export default async function AIPage() {

  const result =
    await generateProject(
      "AI Resume Builder"
    );

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold">
        AI Project Generator
      </h1>

      <div className="mt-10 border border-zinc-800 rounded-2xl p-8">

        <h2 className="text-3xl font-semibold">
          {result.project}
        </h2>

        <ul className="mt-6 space-y-4">
          {result.tasks.map(
            (task: string) => (
              <li key={task}>
                • {task}
              </li>
            )
          )}
        </ul>

      </div>

    </main>
  );
}
