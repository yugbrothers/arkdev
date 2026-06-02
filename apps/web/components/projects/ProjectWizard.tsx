"use client";

import { useEffect,useState } from "react";
import {
  createProject,
  getWorkspaces
} from "@/lib/api";

export default function ProjectWizard(){

  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [workspaceId,setWorkspaceId] = useState("");
  const [workspaces,setWorkspaces] = useState<any[]>([]);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{

    async function load(){

      try{

        const data =
          await getWorkspaces();

        setWorkspaces(data);

        if(data?.length){
          setWorkspaceId(data[0].id);
        }

      }catch(error){

        console.error(error);

      }

    }

    load();

  },[]);

  async function handleCreate(){

    if(!name.trim()) return;
    if(!workspaceId) return;

    try{

      setLoading(true);

      await createProject(
        name,
        description,
        workspaceId
      );

      setName("");
      setDescription("");

      window.location.reload();

    }finally{

      setLoading(false);

    }

  }

  return(

    <div className="mb-12">

      <h2 className="text-3xl font-black mb-6">
        Create Project
      </h2>

      <div className="space-y-4">

        <select
          value={workspaceId}
          onChange={(e)=>
            setWorkspaceId(
              e.target.value
            )
          }
          className="
          w-full
          p-4
          rounded-xl
          bg-white/5
          border
          border-white/10
          "
        >
          {workspaces.map(ws=>(
            <option
              key={ws.id}
              value={ws.id}
            >
              {ws.name}
            </option>
          ))}
        </select>

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
            setDescription(
              e.target.value
            )
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
