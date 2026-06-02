"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  FolderKanban,
  Briefcase,
  Bot,
  BarChart3,
  User,
  Settings,
  Users
} from "lucide-react";

const links = [
  { href:"/dashboard", label:"Dashboard", icon:LayoutDashboard },
  { href:"/projects", label:"Projects", icon:FolderKanban },
  { href:"/workspace", label:"Workspace", icon:Briefcase },
  { href:"/ai", label:"AI Assistant", icon:Bot },
  { href:"/analytics", label:"Analytics", icon:BarChart3 },
  { href:"/teams", label:"Team & Collaboration", icon:Users },
  { href:"/profile", label:"Profile", icon:User },
  { href:"/settings", label:"Settings", icon:Settings }
];

export default function Sidebar() {
  return (
    <aside
      className="
      w-72
      min-h-screen
      border-r
      border-white/10
      bg-black/30
      backdrop-blur-xl
      "
    >
      <div className="p-6">
        <h2 className="text-2xl font-black">
          ArkDev
        </h2>
      </div>

      <nav className="px-4">
        {links.map(item => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              mb-2
              hover:bg-white/10
              transition-all
              "
            >
              <Icon size={18}/>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
