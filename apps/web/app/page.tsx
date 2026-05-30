export default function HomePage() {
  return (
    <main
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      "
    >
      <div className="text-center">
        <h1
          className="
          text-7xl
          font-black
          bg-gradient-to-r
          from-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
          "
        >
          ArkDev
        </h1>

        <p className="mt-6 text-xl opacity-80">
          AI Powered Development Workspace
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/dashboard"
            className="
            px-6
            py-3
            rounded-xl
            bg-blue-600
            "
          >
            Dashboard
          </a>

          <a
            href="/ai"
            className="
            px-6
            py-3
            rounded-xl
            border
            border-white/10
            "
          >
            AI Assistant
          </a>
        </div>
      </div>
    </main>
  );
}
