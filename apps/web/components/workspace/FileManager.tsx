"use client";

import { useState } from "react";

export default function FileManager(){

  const [files,setFiles] =
    useState<string[]>([]);

  function addFile(){

    const name =
      `Document-${files.length+1}.md`;

    setFiles(prev=>[
      ...prev,
      name
    ]);
  }

  function removeFile(name:string){

    setFiles(prev=>
      prev.filter(
        file=>file!==name
      )
    );

  }

  return(

    <div className="mb-10">

      <div
        className="
        text-3xl
        font-black
        mb-6
        "
      >
        Workspace Files
      </div>

      <button
        onClick={addFile}
        className="
        px-5
        py-3
        rounded-xl
        bg-blue-600
        hover:bg-blue-500
        transition-all
        mb-6
        "
      >
        New File
      </button>

      <div className="space-y-3">

        {files.map(file=>(

          <div
            key={file}
            className="
            flex
            items-center
            justify-between
            p-4
            rounded-xl
            border
            border-white/10
            bg-white/5
            "
          >

            <span>{file}</span>

            <button
              onClick={()=>
                removeFile(file)
              }
              className="
              text-red-400
              "
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}
