import {
  getWorkspaces,
  getWorkspaceMembers
} from "@/lib/api";
import InviteMemberForm from "@/components/teams/InviteMemberForm";

export default async function TeamsPage() {

  const workspaces =
    await getWorkspaces();

  const workspace =
    workspaces?.[0];

  const members =
    workspace
      ? await getWorkspaceMembers(
          workspace.id
        )
      : [];

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        Team & Collaboration
      </h1>

      <div
        className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        "
      >
        <h2 className="text-2xl font-bold mb-4">
          Workspace Members
        </h2>

        <p className="opacity-70 mb-6">
          Workspace:
          {" "}
          {workspace?.name || "None"}
        </p>

        <InviteMemberForm />

        <div className="grid gap-4">

          {members.map((member:any)=>(
            <div
              key={member.id}
              className="
              border
              border-white/10
              rounded-xl
              p-4
              "
            >
              <div>
                {member.user?.email}
              </div>

              <div className="opacity-70">
                {member.role}
              </div>
            </div>
          ))}

        </div>

      </div>

    </main>
  );

}
