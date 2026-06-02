"use client";

import { useState } from "react";

export default function InviteMemberForm() {

  const [email,setEmail] =
    useState("");

  const [message,setMessage] =
    useState("");

  async function submitForm() {

    try {

      const response =
        await fetch(
          "/api/member-invite",
          {
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
              email
            })
          }
        );

      const data =
        await response.json();

      if(data.error){
        setMessage(data.error);
        return;
      }

      setMessage(
        "Invitation sent"
      );

      setEmail("");

    } catch {

      setMessage(
        "Failed to invite member"
      );

    }

  }

  return (

    <div className="mb-8">

      <div className="flex gap-3">

        <input
          value={email}
          onChange={(e)=>
            setEmail(
              e.target.value
            )
          }
          placeholder="member@email.com"
          className="
          flex-1
          rounded-xl
          border
          p-3
          bg-transparent
          "
        />

        <button
          onClick={submitForm}
          className="
          rounded-xl
          px-5
          py-3
          border
          "
        >
          Invite
        </button>

      </div>

      {message && (
        <div className="mt-3">
          {message}
        </div>
      )}

    </div>

  );

}
