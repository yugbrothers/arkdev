"use client";

import { useState } from "react";

type Props = {
  onImageGenerated: (image: string, prompt: string) => void;
};

export default function PromptForm({
  onImageGenerated
}: Props) {

  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateImage() {

    setLoading(true);

    try {

      const res = await fetch(
        "/api/studio/generate-image",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt
          })
        }
      );

      const data = await res.json();

      if (data.success) {
        onImageGenerated(
          data.image,
          prompt
        );
      }

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl border p-6">

      <h2 className="text-xl font-semibold mb-4">
        Create Content
      </h2>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your video..."
        className="w-full min-h-32 rounded-xl border p-3"
      />

      <button
        onClick={generateImage}
        disabled={loading}
        className="mt-4 px-4 py-2 rounded-xl border"
      >
        {
          loading
            ? "Generating..."
            : "Generate Images"
        }
      </button>

    </div>
  );
}
