"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href:"/", label:"Home" },
  { href:"/dashboard", label:"Dashboard" },
  { href:"/projects", label:"Projects" },
  { href:"/workspace", label:"Workspace" },
  { href:"/teams", label:"Team & Collaboration" },
  { href:"/analytics", label:"Analytics" },
  { href:"/ai", label:"AI Assistant" },
  { href:"/studio-ai", label:"Ark Studio AI" },
  { href:"/music-gen", label:"Ark MusicGen" },
  { href:"/video-gen", label:"Ark VideoGen" },
  { href:"/profile", label:"Profile" },
  { href:"/settings", label:"Settings" }
];

export default function MobileDrawer() {

  const [open,setOpen] = useState(false);

  return (
    <>
      <button
        onClick={()=>setOpen(true)}
        className="
        md:hidden
        rounded-xl
        border
        border-white/10
        p-2
        "
      >
        <Menu size={22}/>
      </button>

      {open && (
        <>
          <div
            className="
            fixed
            inset-0
            bg-black/60
            z-[90]
            "
            onClick={()=>setOpen(false)}
          />

          <div
            className="
            fixed
            top-0
            left-0
            h-full
            w-[85vw] max-w-sm
            bg-black
            border-r
            border-white/10
            z-[100]
            p-6
            overflow-y-auto
            "
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-black">
                ArkDev
              </h2>

              <button
                onClick={()=>setOpen(false)}
              >
                <X size={22}/>
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {links.map(link=>(
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={()=>setOpen(false)}
                  className="
                  rounded-xl
                  border
                  border-white/10
                  px-4
                  py-3
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
