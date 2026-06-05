export default function PortfolioPage() {

  return (

    <main className="relative min-h-screen">

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
        absolute
        top-0
        left-0
        w-full
        h-full
        object-cover
        -z-10
        "
      >
        <source
          src="/videos/submerge.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/55 -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-20">

        <section className="mb-12">
          <h1 className="text-8xl font-black">
            ARK PORTFOLIO
          </h1>

          <p className="mt-6 text-2xl opacity-80">
            Software Engineer • AI Builder • Startup Founder
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-5xl font-bold mb-8">
            Featured Products
          </h2>
        </section>

        <section className="mb-12">
          <h2 className="text-5xl font-bold mb-8">
            AI Systems
          </h2>
        </section>

        <section className="mb-12">
          <h2 className="text-5xl font-bold mb-8">
            Startup Journey
          </h2>
        </section>

        <section className="mb-12">
          <h2 className="text-5xl font-bold mb-8">
            Technical Stack
          </h2>
        </section>

        <section className="mb-12">
          <h2 className="text-5xl font-bold mb-8">
            Hiring & Contact
          </h2>
        </section>

      </div>

    </main>
  );
}
