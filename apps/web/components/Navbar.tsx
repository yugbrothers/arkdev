import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800 bg-black text-white">
      <div className="max-w-7xl mx-auto p-4 flex gap-6">

        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/workspace">
          Workspaces
        </Link>

        <Link href="/projects">
          Projects
        </Link>

        <Link href="/ai">
          AI
        </Link>

        <Link href="/analytics">
          Analytics
        </Link>

        <Link href="/profile">
          Profile
        </Link>

        <Link href="/settings">
          Settings
        </Link>

      </div>
    </nav>
  );
}
