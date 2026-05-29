export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="inline-block px-4 py-2 rounded-full border border-zinc-700">
          ArkDev Platform
        </div>

        <h1 className="mt-8 text-7xl font-bold">
          Build.
          Deploy.
          Scale.
        </h1>

        <p className="mt-8 text-xl text-zinc-400 max-w-3xl">
          A modern developer workspace combining projects,
          analytics, AI assistants, collaboration and deployment.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 rounded-xl bg-white text-black">
            Start Building
          </button>

          <button className="px-6 py-3 rounded-xl border border-zinc-700">
            Live Demo
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold">
          Core Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-semibold">
              Project Management
            </h3>
            <p className="mt-4 text-zinc-400">
              Create and manage projects at scale.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-semibold">
              AI Assistant
            </h3>
            <p className="mt-4 text-zinc-400">
              Generate tasks, docs and code suggestions.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-semibold">
              Analytics
            </h3>
            <p className="mt-4 text-zinc-400">
              Monitor performance and team activity.
            </p>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="rounded-3xl border border-zinc-800 p-10">
          <h2 className="text-5xl font-bold">
            Ready for Teams
          </h2>

          <p className="mt-6 text-zinc-400 text-lg">
            Workspaces, collaboration, notifications,
            automation and enterprise scalability.
          </p>
        </div>
      </section>

    </main>
  );
}
