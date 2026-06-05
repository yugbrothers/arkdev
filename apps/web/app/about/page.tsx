export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        -z-10
        "
      >
        <source
          src="/video/space.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="pt-32 px-10">

        <h1 className="text-6xl font-black mb-6 text-white">
          About ArkDev
        </h1>

        <p className="max-w-4xl text-xl text-white/90">
          ArkDev is an AI powered development platform
          combining project management, realtime
          collaboration, AI assistance, analytics,
          workspaces and developer productivity tools.
        </p>

      </div>

    </main>
  );
}
