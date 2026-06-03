"use client";

import { useState } from "react";

import PromptForm from "@/components/studio/PromptForm";
import AssetLibrary from "@/components/studio/AssetLibrary";

export default function StudioAIPage() {

  const [image, setImage] =
    useState("");

  const [prompt, setPrompt] =
    useState("");

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">

      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          Ark Studio AI
        </h1>

        <p className="mt-4 opacity-80">
          Generate images, music and videos.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <PromptForm
          onImageGenerated={(
            generatedImage,
            generatedPrompt
          ) => {

            setImage(
              generatedImage
            );

            setPrompt(
              generatedPrompt
            );
          }}
        />

        <AssetLibrary
          image={image}
          prompt={prompt}
        />

      </div>

    </main>
  );
}
