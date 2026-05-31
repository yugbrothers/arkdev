export default function OSPanel() {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      p-6
      "
    >
      <h2 className="text-2xl font-bold mb-4">
        ArkDev OS
      </h2>

      <div className="grid md:grid-cols-4 gap-4">
        <div>Projects</div>
        <div>Chat</div>
        <div>Notifications</div>
        <div>AI</div>
      </div>
    </div>
  );
}
