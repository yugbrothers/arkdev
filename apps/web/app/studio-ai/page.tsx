"use client";

export default function StudioAIPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:"url('/images/autumn.png')"
        }}
      />

      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center">
          <h1 className="text-7xl font-black mb-6">
            ARK STUDIO AI
          </h1>

          <p className="text-2xl opacity-90 max-w-3xl mx-auto">
            Create AI images, marketing assets,
            branding visuals, social content,
            startup graphics and creative media.
          </p>
        </div>

      </div>

    </main>
  );
}
