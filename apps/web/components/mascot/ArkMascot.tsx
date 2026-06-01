"use client";

import MascotParticles from "./MascotParticles";
import MascotSpeech from "./MascotSpeech";
import MascotEmotion from "./MascotEmotion";
import MascotTracker from "./MascotTracker";
import MascotBrain from "./MascotBrain";
import MascotClick from "./MascotClick";

export default function ArkMascot(){

  return(

    <div
      className="
      fixed
      top-6
      right-6
      z-[9999]
      "
    >

      <MascotTracker />

      <MascotSpeech />

      <MascotBrain />

      <div className="ark-ai-core">

        <MascotParticles />

        <div className="ark-ring ring1"></div>
        <div className="ark-ring ring2"></div>
        <div className="ark-ring ring3"></div>

        <div className="ark-center"></div>

        <MascotClick />

        <MascotEmotion />

      </div>

    </div>

  );

}
