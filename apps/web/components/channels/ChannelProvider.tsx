"use client";

import { useState } from "react";
import { ChannelContext } from "@/lib/channel/channelStore";

export default function ChannelProvider({
  children
}:{
  children:React.ReactNode
}){

  const [channel,setChannel] =
    useState("general");

  return(

    <ChannelContext.Provider
      value={{
        channel,
        setChannel
      }}
    >
      {children}
    </ChannelContext.Provider>

  );

}
