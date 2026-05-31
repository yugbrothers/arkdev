export default function ChannelsPage() {

  const channels = [
    "# general",
    "# announcements",
    "# ai",
    "# projects",
    "# support",
    "# jobs",
    "# startups"
  ];

  return (
    <main className="pt-28 px-8">
      <h1 className="text-6xl font-black mb-10">
        Channels
      </h1>

      <div className="space-y-4">
        {channels.map(channel => (
          <div
            key={channel}
            className="
            rounded-xl
            border
            border-white/10
            p-5
            "
          >
            {channel}
          </div>
        ))}
      </div>
    </main>
  );
}
