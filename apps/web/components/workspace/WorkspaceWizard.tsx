"use client";

import { useState } from "react";
import { createWorkspace } from "@/lib/api";

export default function WorkspaceWizard(){

  const [name,setName] =
    useState("");

  const [loading,setLoading] =
    useState(false);

  async function handleCreate(){

    if(!name.trim()) return;

    try{

      setLoading(true);

      await createWorkspace(name);

      setName("");

      window.location.reload();

    }finally{

      setLoading(false);

    }

  }

  return(

    <div className="mb-10">

      <h2 className="text-3xl font-black mb-6">
        Create Workspace
      </h2>

      <div className="flex gap-3">

        <input
          value={name}
          onChange={(e)=>
            setName(e.target.value)
          }
          placeholder="Workspace Name"
          className="
          flex-1
          p-4
          rounded-xl
          bg-white/5
          border
          border-white/10
          "
        />

        <button
          onClick={handleCreate}
          disabled={loading}
          className="
          px-6
          rounded-xl
          bg-blue-600
          "
        >
          {loading
            ? "..."
            : "Create"}
        </button>

      </div>

    </div>

  );

}
