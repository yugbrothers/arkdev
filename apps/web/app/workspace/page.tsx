export default function WorkspacePage() {

  return (
    <main className="relative min-h-screen overflow-hidden"><video autoPlay muted loop playsInline className="fixed inset-0 w-full h-full object-cover -z-10"><source src="/videos/butterfly.mp4" type="video/mp4" /></video><div className="absolute inset-0 bg-black/60 -z-10" /><div className="max-w-7xl mx-auto px-4 py-32">

      <h1 className="text-5xl font-black mb-10">
        ARK Startup Workspace
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-3xl border p-6">
          <h2 className="font-bold text-xl">
            Startup Overview
          </h2>
          <p className="mt-4">
            AI Creator Platform
          </p>
        </div>

        <div className="rounded-3xl border p-6">
          <h2 className="font-bold text-xl">
            Product Status
          </h2>
          <p className="mt-4">
            Active Development
          </p>
        </div>

        <div className="rounded-3xl border p-6">
          <h2 className="font-bold text-xl">
            Completion %
          </h2>
          <p className="mt-4 text-4xl font-black">
            75%
          </p>
        </div>

        <div className="rounded-3xl border p-6">
          <h2 className="font-bold text-xl">
            Active Features
          </h2>
          <p className="mt-4">
            Studio, MusicGen, VideoGen
          </p>
        </div>

        <div className="rounded-3xl border p-6">
          <h2 className="font-bold text-xl">
            Deployment Status
          </h2>
          <p className="mt-4">
            Live on Render
          </p>
        </div>

        <div className="rounded-3xl border p-6">
          <h2 className="font-bold text-xl">
            Portfolio
          </h2>
          <p className="mt-4">
            ArkDev Platform
          </p>
        </div>

        <div className="rounded-3xl border p-6">
          <h2 className="font-bold text-xl">
            Founder
          </h2>
          <p className="mt-4">
            Premchand Sharma
          </p>
        </div>

        <div className="rounded-3xl border p-6">
          <h2 className="font-bold text-xl">
            Team Members
          </h2>
          <p className="mt-4">
            Core Development Team
          </p>
        </div>

        <div className="rounded-3xl border p-6">
          <h2 className="font-bold text-xl">
            Roles
          </h2>
          <p className="mt-4">
            Founder • Developer • Product
          </p>
        </div>

      </div>

      <div className="rounded-3xl border p-6 mt-8">

        <h2 className="text-2xl font-bold mb-4">
          Roadmap
        </h2>

        <ul className="space-y-3">
          <li>✓ Studio AI</li>
          <li>✓ MusicGen</li>
          <li>✓ VideoGen</li>
          <li>◻ Real Music Generation</li>
          <li>◻ Real Video Generation</li>
          <li>◻ Publishing Pipeline</li>
        </ul>

      </div>

    </div></main>
  );
}
