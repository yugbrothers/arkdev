"use client";

import { useEffect,useState } from "react";

export default function CommunityFeed(){

  const [posts,setPosts]=
    useState([
      {
        title:"AI Workspace Created",
        time:"2 min ago"
      },
      {
        title:"Project Published",
        time:"15 min ago"
      }
    ]);

  useEffect(()=>{

    const interval=
      setInterval(()=>{

        const updates=[

          "New Builder Joined",
          "Project Published",
          "Workspace Created",
          "AI Agent Activated",
          "Community Discussion Started",
          "New Startup Added"

        ];

        const random=
          updates[
            Math.floor(
              Math.random()*
              updates.length
            )
          ];

        setPosts(prev=>[
          {
            title:random,
            time:"Just now"
          },
          ...prev
        ].slice(0,10));

      },12000);

    return ()=>
      clearInterval(interval);

  },[]);

  return(

    <div className="space-y-4">

      {posts.map((post,index)=>(

        <div
          key={index}
          className="
          p-5
          rounded-2xl
          border
          border-white/10
          bg-white/5
          "
        >

          <div className="font-bold">
            {post.title}
          </div>

          <div
            className="
            opacity-60
            text-sm
            mt-2
            "
          >
            {post.time}
          </div>

        </div>

      ))}

    </div>

  );

}
