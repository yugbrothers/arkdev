export default function AIPage() {
  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        AI Assistant
      </h1>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <textarea
          className="
          w-full
          h-48
          rounded-xl
          bg-black/20
          p-4
          border
          border-white/10
          "
          placeholder="Describe your project..."
        />

        <button
          className="
          mt-4
          px-6
          py-3
          rounded-xl
          bg-blue-600
          "
        >
          Generate
        </button>
      </div>
    </main>
  );
}
