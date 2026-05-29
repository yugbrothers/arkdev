export default function Navbar() {
  return (
    <header className="h-16 border-b border-zinc-800 bg-black text-white">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between px-6">
        <div className="font-bold text-xl">
          ArkDev
        </div>

        <nav className="flex gap-6 text-sm">
          <a href="/dashboard">Dashboard</a>
          <a href="/projects">Projects</a>
          <a href="/workspace">Workspace</a>
          <a href="/analytics">Analytics</a>
        </nav>
      </div>
    </header>
  );
}
