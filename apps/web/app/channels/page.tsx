"use client";

import { useState } from "react";
import ChannelSidebar from "@/components/channels/ChannelSidebar";
import RealtimeChat from "@/components/chat/RealtimeChat";

export default function ChannelsPage(){

  const [active,setActive]=
    useState("general");

  return(

    <main
      className="
      pt-28
      px-8
      "
    >

      <h1
        className="
        text-6xl
        font-black
        mb-10
        "
      >
        Channels
      </h1>

      <div
        className="
        flex
        gap-8
        "
      >

        <ChannelSidebar
          active={active}
          setActive={setActive}
        />

        <div className="flex-1">

          <div
            className="
            text-xl
            font-bold
            mb-4
            "
          >
            # {active}
          </div>

          <RealtimeChat />

        </div>

      </div>

    </main>

  );
}
