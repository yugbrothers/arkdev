"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Orb() {
  return (
    <Float
      speed={2}
      rotationIntensity={2}
      floatIntensity={3}
    >
      <mesh>
        <icosahedronGeometry args={[2,1]} />
        <meshStandardMaterial
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function ThreeOrb() {
  return (
    <div
      className="
      fixed
      inset-0
      -z-10
      opacity-20
      pointer-events-none
      "
    >
      <Canvas>
        <ambientLight intensity={2} />
        <Orb />
      </Canvas>
    </div>
  );
}
