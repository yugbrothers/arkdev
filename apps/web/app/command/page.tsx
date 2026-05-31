export default function CommandPage() {
  return (
    <main className="pt-28 px-8">
      <h1 className="text-6xl font-black mb-10">
        Command Center
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <a href="/projects"
          className="border rounded-2xl p-6">
          Create Project
        </a>

        <a href="/workspace"
          className="border rounded-2xl p-6">
          Open Workspace
        </a>

        <a href="/agents"
          className="border rounded-2xl p-6">
          Run Agent
        </a>

        <a href="/ai"
          className="border rounded-2xl p-6">
          Generate With AI
        </a>

      </div>
    </main>
  );
}
