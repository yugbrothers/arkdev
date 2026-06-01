"use client";

import { useState } from "react";
import { createTask } from "@/lib/api";

export default function CreateTask(){

  const [title,setTitle] =
    useState("");

  const [loading,setLoading] =
    useState(false);

  async function handleCreate(){

    if(!title.trim()) return;

    try{

      setLoading(true);

      await createTask(
        title,
        "default"
      );

      setTitle("");

      window.location.reload();

    }finally{

      setLoading(false);

    }

  }

  return(

    <div
      className="
      mb-8
      flex
      gap-3
      "
    >

      <input
        value={title}
        onChange={(e)=>
          setTitle(e.target.value)
        }
        placeholder="New Task"
        className="
        flex-1
        p-3
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
        px-5
        rounded-xl
        bg-blue-600
        "
      >
        {loading
          ? "..."
          : "Add"}
      </button>

    </div>

  );

}
