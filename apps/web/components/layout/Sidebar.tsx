export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r border-zinc-800 bg-black text-white">
      <div className="p-6 text-2xl font-bold">
        ArkDev
      </div>

      <nav className="px-6">
        <ul className="space-y-4">
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/workspace">Workspace</a></li>
          <li><a href="/analytics">Analytics</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
    </aside>
  );
}
