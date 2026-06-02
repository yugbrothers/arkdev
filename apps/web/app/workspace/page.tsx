import WorkspaceWizard from "@/components/workspace/WorkspaceWizard";
import FileManager from "@/components/workspace/FileManager";
import { getWorkspaces } from "@/lib/api";

export default async function WorkspacePage() {
  const workspaces =
    await getWorkspaces();

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">

      <WorkspaceWizard />

      <FileManager />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
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
            p-4 md:p-6 lg:p-8
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
