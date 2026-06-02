"use client";

import { useEffect,useState } from "react";
import {
  createTask,
  getProjects
} from "@/lib/api";

export default function CreateTask(){

  const [title,setTitle] =
    useState("");

  const [projectId,setProjectId] =
    useState("");

  const [projects,setProjects] =
    useState<any[]>([]);

  const [loading,setLoading] =
    useState(false);

  useEffect(()=>{

    async function load(){

      const data =
        await getProjects();

      setProjects(data || []);

      if(data?.length){
        setProjectId(data[0].id);
      }

    }

    load();

  },[]);

  async function handleCreate(){

    if(!title.trim()) return;
    if(!projectId) return;

    try{

      setLoading(true);

      await createTask(
        title,
        projectId
      );

      setTitle("");

      window.location.reload();

    }finally{

      setLoading(false);

    }

  }

  return(

    <div className="mb-8 space-y-3">

      <select
        value={projectId}
        onChange={(e)=>
          setProjectId(
            e.target.value
          )
        }
        className="
        w-full
        p-3
        rounded-xl
        bg-white/5
        border
        border-white/10
        "
      >
        {projects.map(project=>(
          <option
            key={project.id}
            value={project.id}
          >
            {project.name}
          </option>
        ))}
      </select>

      <div className="flex gap-3">

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
          {loading ? "..." : "Add"}
        </button>

      </div>

    </div>

  );

}
