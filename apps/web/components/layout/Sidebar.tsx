"use client";

import {
  LayoutDashboard,
  FolderKanban,
  Briefcase,
  Bot,
  BarChart3,
  User,
  Settings
} from "lucide-react";

const links = [
  { href:"/dashboard", label:"Dashboard", icon:LayoutDashboard },
  { href:"/projects", label:"Projects", icon:FolderKanban },
  { href:"/workspace", label:"Workspace", icon:Briefcase },
  { href:"/ai", label:"AI Assistant", icon:Bot },
  { href:"/analytics", label:"Analytics", icon:BarChart3 },
  { href:"/profile", label:"Profile", icon:User },
  { href:"/settings", label:"Settings", icon:Settings }
];

export default function Sidebar() {
  return (
    <aside
      className="
      w-72
      min-h-screen
      backdrop-blur-xl
      border-r
      border-white/10
      bg-black/20
      "
    >
      <div className="p-6">
        <h2 className="text-xl font-bold">
          Navigation
        </h2>
      </div>

      <nav className="px-4">
        {links.map(item => {
          const Icon = item.icon;

          return (
            <a
              key={item.href}
              href={item.href}
              className="
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              hover:bg-white/10
              transition-all
              duration-300
              mb-2
              "
            >
              <Icon size={18}/>
              {item.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
