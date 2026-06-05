import {
  getWorkspaces,
  getWorkspaceMembers
} from "@/lib/api";

import InviteMemberForm
from "@/components/teams/InviteMemberForm";

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

  const admins =
    members.filter(
      (m:any)=>
        m.role === "admin"
    ).length;

  return (
    <main className="relative min-h-screen overflow-hidden"><video autoPlay muted loop playsInline className="fixed inset-0 w-full h-full object-cover -z-10"><source src="/videos/butterfly.mp4" type="video/mp4" /></video><div className="absolute inset-0 bg-black/60 -z-10" /><div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-32 overflow-x-hidden">

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        Team & Collaboration
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

        <div className="rounded-2xl border border-white/10 p-6">
          <div className="opacity-70">
            Members
          </div>

          <div className="text-4xl font-bold">
            {members.length}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 p-6">
          <div className="opacity-70">
            Admins
          </div>

          <div className="text-4xl font-bold">
            {admins}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 p-6">
          <div className="opacity-70">
            Workspace
          </div>

          <div className="font-semibold">
            {workspace?.name || "None"}
          </div>
        </div>

      </div>

      <div
        className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-4 md:p-8
        "
      >

        <h2 className="text-2xl font-bold mb-4">
          Team Management
        </h2>

        <InviteMemberForm />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {members.map((member:any)=>(

            <div
              key={member.id}
              className="
              rounded-2xl
              border
              border-white/10
              p-4
              "
            >
              <div className="font-medium">
                {member.user?.email}
              </div>

              <div className="mt-2">
                <span
                  className="
                  inline-block
                  rounded-full
                  border
                  border-white/10
                  px-3
                  py-1
                  text-sm
                  "
                >
                  {member.role}
                </span>
              </div>
            </div>

          ))}

        </div>

      </div>

    </div></main>
  );
}
