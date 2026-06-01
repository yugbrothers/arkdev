"use client";

import { createContext } from "react";

export const ChannelContext =
  createContext({
    channel:"general",
    setChannel:
      (_channel:string)=>{}
  });
