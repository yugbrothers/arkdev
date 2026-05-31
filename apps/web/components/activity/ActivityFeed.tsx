export default function ActivityFeed() {

  const items = [
    "Project Created",
    "Workspace Updated",
    "Task Completed",
    "AI Project Generated"
  ];

  return (
    <div
      className="
      rounded-2xl
      border
      border-white/10
      p-6
      "
    >
      <h2 className="text-2xl font-bold mb-4">
        Activity Feed
      </h2>

      <div className="space-y-3">
        {items.map(item => (
          <div key={item}>
            • {item}
          </div>
        ))}
      </div>
    </div>
  );
}
