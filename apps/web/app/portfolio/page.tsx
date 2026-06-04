export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="
        fixed
        inset-0
        h-full
        w-full
        object-cover
        -z-10
        "
      >
        <source
          src="/video/portfolio-bg.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/60 -z-10" />

      <section className="max-w-7xl mx-auto px-6 py-32">

        <h1 className="text-7xl font-black mb-6">
          ARK PORTFOLIO
        </h1>

        <p className="text-xl opacity-80 mb-16">
          AI Startup • Software Products • Creator Platform
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">
              Startup Profile
            </h2>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">
              Products
            </h2>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">
              AI Solutions
            </h2>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">
              Creator Tools
            </h2>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">
              Technical Skills
            </h2>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">
              Contact & Hiring
            </h2>
          </div>

        </div>

      </section>

    </main>
  );
}
