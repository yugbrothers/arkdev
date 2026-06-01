"use client";

import { useState } from "react";
import { createProject } from "@/lib/api";

export default function ProjectWizard(){

  const [name,setName] =
    useState("");

  const [description,setDescription] =
    useState("");

  const [loading,setLoading] =
    useState(false);

  async function handleCreate(){

    if(!name.trim()) return;

    try{

      setLoading(true);

      await createProject(
        name,
        description
      );

      setName("");
      setDescription("");

      window.location.reload();

    }catch(error){

      console.error(error);

    }finally{

      setLoading(false);

    }

  }

  return(

    <div className="mb-12">

      <h2
        className="
        text-3xl
        font-black
        mb-6
        "
      >
        Create Project
      </h2>

      <div className="space-y-4">

        <input
          value={name}
          onChange={(e)=>
            setName(e.target.value)
          }
          placeholder="Project Name"
          className="
          w-full
          p-4
          rounded-xl
          bg-white/5
          border
          border-white/10
          "
        />

        <textarea
          value={description}
          onChange={(e)=>
            setDescription(e.target.value)
          }
          placeholder="Project Description"
          className="
          w-full
          p-4
          rounded-xl
          min-h-[120px]
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
          py-3
          rounded-xl
          bg-blue-600
          hover:bg-blue-500
          transition-all
          "
        >
          {loading
            ? "Creating..."
            : "Create Project"}
        </button>

      </div>

    </div>

  );

}
