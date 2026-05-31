export default function NotificationsPage() {

  const items = [
    "Workspace Updated",
    "Project Created",
    "AI Project Generated",
    "New Community Message"
  ];

  return (
    <main className="pt-28 px-8">
      <h1 className="text-6xl font-black mb-10">
        Notifications
      </h1>

      <div className="space-y-4">
        {items.map(item => (
          <div
            key={item}
            className="
            rounded-2xl
            border
            border-white/10
            p-5
            "
          >
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}
