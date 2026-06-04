"use client";

import { useState } from "react";

import PromptForm from "@/components/studio/PromptForm";
import AssetLibrary from "@/components/studio/AssetLibrary";
import { GeneratedAsset } from "@/components/studio/types";

export default function StudioAIPage() {

  const [assets,setAssets] = useState<GeneratedAsset[]>([]);

  function addAsset(
    image:string,
    prompt:string
  ) {

    const asset:GeneratedAsset = {
      id: crypto.randomUUID(),
      image,
      prompt,
      createdAt:
        new Date().toLocaleString()
    };

    setAssets(prev => [
      asset,
      ...prev
    ]);
  }

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">

      <div className="mb-10 text-center">

        <div className="text-6xl mb-4">
          🎬
        </div>

        <h1 className="text-5xl font-black">
          Ark Studio AI
        </h1>

        <p className="mt-4 text-xl opacity-80">
          Create Images • Music • Videos
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <PromptForm
          onImageGenerated={addAsset}
        />

        <AssetLibrary
          assets={assets}
        />

      </div>

    </main>
  );
}
