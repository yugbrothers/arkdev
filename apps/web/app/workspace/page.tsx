import WorkspaceWizard from "@/components/workspace/WorkspaceWizard";
import FileManager from "@/components/workspace/FileManager";
import { getWorkspaces } from "@/lib/api";

export default async function WorkspacePage() {
  const workspaces =
    await getWorkspaces();

  return (
    <main className="max-w-7xl mx-auto p-8">

      <WorkspaceWizard />

      <FileManager />
      <h1 className="text-5xl font-bold mb-8">
        Workspaces
      </h1>

      <div className="grid gap-6">
        {workspaces.map((workspace:any) => (
          <div
            key={workspace.id}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            "
          >
            <h2 className="text-2xl font-bold">
              {workspace.name}
            </h2>

            <p className="opacity-70 mt-3">
              {workspace.id}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
