export default function ChannelsPage(){

  const channels = [
    "general",
    "announcements",
    "ai",
    "projects",
    "support"
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
            p-4
            border
            "
          >
            # {channel}
          </div>
        ))}
      </div>
    </main>
  );
}
