"use client";

import { useEffect,useState } from "react";
import { socket } from "@/lib/socket/client";

export default function RealtimeChat(){

  const [messages,setMessages] =
    useState<any[]>([]);

  const [input,setInput] =
    useState("");

  const [onlineUsers,setOnlineUsers] =
    useState(0);

  const [typing,setTyping] =
    useState(false);

  useEffect(()=>{

    socket.connect();

    socket.emit(
      "join-channel",
      "general"
    );

    socket.on(
      "receive-message",
      (message:any)=>{

        setMessages(prev=>[
          ...prev,
          message
        ]);

      }
    );

    socket.on(
      "online-users",
      (count:number)=>{

        setOnlineUsers(count);

      }
    );

    socket.on(
      "user-typing",
      ()=>{

        setTyping(true);

        setTimeout(()=>{

          setTyping(false);

        },1500);

      }
    );

    return ()=>{

      socket.off("receive-message");
      socket.off("online-users");
      socket.off("user-typing");

      socket.disconnect();

    };

  },[]);

  function sendMessage(){

    if(!input.trim()) return;

    const payload = {
      channelId:"general",
      content:input
    };

    socket.emit(
      "send-message",
      payload
    );

    setInput("");

  }

  return(

    <div className="space-y-4">

      <div
        className="
        flex
        items-center
        justify-between
        "
      >

        <div
          className="
          text-sm
          opacity-60
          "
        >
          Online Users: {onlineUsers}
        </div>

        {typing && (

          <div
            className="
            text-sm
            text-blue-400
            animate-pulse
            "
          >
            Someone is typing...
          </div>

        )}

      </div>

      <div
        className="
        border
        border-white/10
        rounded-2xl
        p-4
        h-[60vh] min-h-[400px] max-h-[800px]
        overflow-auto
        bg-white/5
        "
      >

        {messages.length === 0 && (

          <div
            className="
            opacity-40
            "
          >
            No messages yet
          </div>

        )}

        {messages.map((msg,index)=>(

          <div
            key={index}
            className="
            mb-3
            p-3
            rounded-xl
            bg-white/10
            "
          >
            {msg.content}
          </div>

        ))}

      </div>

      <div
        className="
        flex
        gap-3
        "
      >

        <input
          value={input}
          onChange={(e)=>{

            setInput(
              e.target.value
            );

            socket.emit(
              "typing",
              "general"
            );

          }}
          onKeyDown={(e)=>{

            if(
              e.key==="Enter"
            ){

              sendMessage();

            }

          }}
          placeholder="Send message..."
          className="
          flex-1
          p-4
          rounded-xl
          bg-white/5
          border
          border-white/10
          "
        />

        <button
          onClick={sendMessage}
          className="
          px-6
          rounded-xl
          border
          border-white/10
          hover:bg-white/10
          transition-all
          "
        >
          Send
        </button>

      </div>

    </div>

  );

}
