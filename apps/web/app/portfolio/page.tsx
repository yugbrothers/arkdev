export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source
          src="/videos/submerge.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/70 -z-10" />

      <section
        className="
        min-h-screen
        flex
        items-center
        justify-center
        px-8
        "
      >
        <div className="max-w-5xl text-center">

          <h1 className="text-7xl md:text-8xl font-black mb-8">
            Abhishek Sharma
          </h1>

          <p className="text-3xl mb-8 opacity-90">
            Software Engineer • AI Engineer •
            Full Stack Developer • Startup Builder
          </p>

          <p className="text-xl opacity-80 leading-relaxed">
            Building production-ready AI systems,
            SaaS platforms, automation tools,
            developer products and scalable web applications.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-16">

            <div className="rounded-2xl border p-6">
              <h3 className="text-4xl font-black">20+</h3>
              <p>Projects Built</p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-4xl font-black">AI</h3>
              <p>Machine Learning</p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-4xl font-black">Full Stack</h3>
              <p>Production Systems</p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-4xl font-black">Open</h3>
              <p>Hiring Opportunities</p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
