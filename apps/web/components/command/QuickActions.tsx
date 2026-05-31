export default function QuickActions() {
  return (
    <div
      className="
      grid
      md:grid-cols-3
      gap-4
      "
    >
      <a href="/projects">Projects</a>
      <a href="/workspace">Workspace</a>
      <a href="/agents">Agents</a>
      <a href="/chat">Chat</a>
      <a href="/notifications">Notifications</a>
      <a href="/ai">AI</a>
    </div>
  );
}
