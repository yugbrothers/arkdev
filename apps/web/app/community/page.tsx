import Leaderboard from "@/components/community/Leaderboard";
import CommunityFeed from "@/components/community/CommunityFeed";
import OnlineBadge from "@/components/community/OnlineBadge";

export default function CommunityPage() {

  const channels = [
    "general",
    "ai-builders",
    "projects",
    "founders",
    "support"
  ];

  const users = [
    "Abhishek",
    "Prem",
    "AI Agent",
    "Builder",
    "Founder"
  ];

  return (
    <main
      className="
      pt-24
      h-screen
      flex
      "
    >

      <aside
        className="
        w-72
        border-r
        border-white/10
        p-6
        "
      >
        <h2 className="text-2xl font-bold mb-6">
          Channels
        </h2>

        <div className="space-y-3">

          {channels.map(channel=>(
            <div
              key={channel}
              className="
              p-3
              rounded-xl
              hover:bg-white/10
              cursor-pointer
              "
            >
              # {channel}
            </div>
          ))}

        </div>

      </aside>

      <section
        className="
        flex-1
        p-8
        "
      >

        <h1
          className="
          text-5xl
          font-black
          mb-6
          "
        >
          ArkDev Community
        </h1>

        <div
          className="
          rounded-3xl
          border
          border-white/10
          h-[650px]
          p-6
          "
        >
          Community Chat Area
        </div>

      </section>

      <aside
        className="
        w-72
        border-l
        border-white/10
        p-6
        "
      >

        <h2 className="text-2xl font-bold mb-6">
          Online Users
        </h2>

        <OnlineBadge />

        <CommunityFeed />

        <div className="mt-8 space-y-3">

          {users.map(user=>(
            <div
              key={user}
              className="
              flex
              items-center
              gap-3
              "
            >
              <div
                className="
                w-3
                h-3
                rounded-full
                bg-green-500
                "
              />

              {user}
            </div>
          ))}

        </div>

      </aside>

    </main>
  );
}
