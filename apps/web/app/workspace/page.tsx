import { getWorkspaces } from "@/lib/api";

export default async function WorkspacePage() {

  const workspaces =
    await getWorkspaces();

  return (
    <main className="p-8">

      <h1 className="text-4xl font-bold">
        Workspaces
      </h1>

      <div className="mt-8 space-y-4">

        {workspaces.map(
          (workspace: any) => (
            <div
              key={workspace.id}
              className="border border-zinc-800 rounded-xl p-6"
            >
              <h2 className="text-2xl">
                {workspace.name}
              </h2>

              <p className="text-zinc-500 mt-2">
                {workspace.id}
              </p>
            </div>
          )
        )}

      </div>

    </main>
  );
}
