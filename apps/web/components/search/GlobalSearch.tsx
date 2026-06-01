"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GlobalSearch(){

  const router = useRouter();

  const [query,setQuery] =
    useState("");

  const items = [

    ["Dashboard","/dashboard"],
    ["Workspace","/workspace"],
    ["Projects","/projects"],
    ["AI","/ai"],
    ["Analytics","/analytics"],
    ["Community","/community"],
    ["Chat","/chat"],
    ["Notifications","/notifications"],
    ["Profile","/profile"]

  ];

  const filtered =
    items.filter(([name]) =>
      name
        .toLowerCase()
        .includes(
          query.toLowerCase()
        )
    );

  return(

    <div
      className="
      w-full
      max-w-xl
      mx-auto
      "
    >

      <input
        value={query}
        onChange={(e)=>
          setQuery(e.target.value)
        }
        placeholder="Search ArkDev..."
        className="
        w-full
        p-4
        rounded-xl
        bg-white/5
        border
        border-white/10
        "
      />

      {query && (

        <div
          className="
          mt-3
          rounded-xl
          border
          border-white/10
          overflow-hidden
          "
        >

          {filtered.map(
            ([name,path])=>(
              <button
                key={path}
                onClick={()=>
                  router.push(path)
                }
                className="
                w-full
                text-left
                p-4
                hover:bg-white/5
                "
              >
                {name}
              </button>
            )
          )}

        </div>

      )}

    </div>

  );

}
