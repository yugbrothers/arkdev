"use client";

import { useState } from "react";

export default function ProjectWizard(){

  const [name,setName] =
    useState("");

  const [description,setDescription] =
    useState("");

  const [projects,setProjects] =
    useState<any[]>([]);

  function createProject(){

    if(!name.trim()) return;

    setProjects(prev=>[
      ...prev,
      {
        id:Date.now(),
        name,
        description,
        status:"Active"
      }
    ]);

    setName("");
    setDescription("");

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
          onClick={createProject}
          className="
          px-6
          py-3
          rounded-xl
          bg-blue-600
          hover:bg-blue-500
          transition-all
          "
        >
          Create Project
        </button>

      </div>

      <div className="mt-8 space-y-4">

        {projects.map(project=>(

          <div
            key={project.id}
            className="
            p-5
            rounded-2xl
            border
            border-white/10
            bg-white/5
            "
          >

            <div className="font-bold text-lg">
              {project.name}
            </div>

            <div className="opacity-70 mt-2">
              {project.description}
            </div>

            <div
              className="
              text-sm
              text-green-400
              mt-3
              "
            >
              {project.status}
            </div>

          </div>

        ))}

      </div>

    </div>

  );

}
