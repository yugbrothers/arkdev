"use client";

import {
  useEffect,
  useState
} from "react";

import {
  getTasks
} from "@/lib/api";

import TaskCard from "./TaskCard";
import CreateTask from "./CreateTask";

export default function KanbanBoard(){

  const [tasks,setTasks] =
    useState<any[]>([]);

  useEffect(()=>{

    async function load(){

      try{

        const data =
          await getTasks("default");

        setTasks(
          Array.isArray(data)
            ? data
            : []
        );

      }catch{

        setTasks([]);

      }

    }

    load();

  },[]);

  const columns = {

    todo:
      tasks.filter(
        t => t.status === "TODO" ||
             t.status === "todo"
      ),

    progress:
      tasks.filter(
        t => t.status === "IN_PROGRESS"
      ),

    done:
      tasks.filter(
        t => t.status === "DONE"
      )

  };

  return(
    <>
      <CreateTask />

      <div
        className="
        grid
        md:grid-cols-3
        gap-6
        mb-12
        "
      >

        <div
          className="
          rounded-2xl
          bg-white/5
          p-4
          "
        >
          <h2 className="font-bold mb-4">
            Todo
          </h2>

          {columns.todo.map(task=>(
            <TaskCard
              key={task.id}
              task={task}
            />
          ))}
        </div>

        <div
          className="
          rounded-2xl
          bg-white/5
          p-4
          "
        >
          <h2 className="font-bold mb-4">
            In Progress
          </h2>

          {columns.progress.map(task=>(
            <TaskCard
              key={task.id}
              task={task}
            />
          ))}
        </div>

        <div
          className="
          rounded-2xl
          bg-white/5
          p-4
          "
        >
          <h2 className="font-bold mb-4">
            Done
          </h2>

          {columns.done.map(task=>(
            <TaskCard
              key={task.id}
              task={task}
            />
          ))}
        </div>

      </div>
    </>
  );

}
