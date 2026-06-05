export default function AIPage() {
  return (
    <main className="relative min-h-[1924px] overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="
        fixed
        inset-0
        w-full
        h-full
        object-cover
        -z-10
        "
      >
        <source
          src="/videos/butterfly.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/55 -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-32">

        <h1 className="text-7xl font-black mb-8">
          AI ASSISTANT
        </h1>

        <div
          className="
          rounded-3xl
          border
          border-white/20
          bg-white/5
          p-8
          backdrop-blur-md
          "
        >
          <textarea
            className="
            w-full
            h-48
            rounded-xl
            border
            border-white/20
            bg-black/20
            p-4
            "
            placeholder="Describe your SaaS idea..."
          />

          <button
            className="
            mt-6
            px-6
            py-3
            rounded-xl
            bg-blue-600
            "
          >
            Generate Project
          </button>

        </div>

      </div>

    </main>
  );
}
