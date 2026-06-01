"use client";

interface Props{
  active:string;
  setActive:(channel:string)=>void;
}

export default function ChannelSidebar({
  active,
  setActive
}:Props){

  const channels=[
    "general",
    "announcements",
    "ai",
    "projects",
    "support",
    "jobs",
    "startups"
  ];

  return(

    <aside
      className="
      w-72
      border-r
      border-white/10
      pr-4
      "
    >

      <div
        className="
        text-xl
        font-bold
        mb-6
        "
      >
        Channels
      </div>

      {channels.map(channel=>(

        <button
          key={channel}
          onClick={()=>
            setActive(channel)
          }
          className={`
          w-full
          text-left
          p-4
          rounded-xl
          mb-2
          transition-all

          ${
            active===channel
            ? "bg-blue-500/20 border border-blue-500/30"
            : "bg-white/5"
          }
          `}
        >
          # {channel}
        </button>

      ))}

    </aside>

  );

}
