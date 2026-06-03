"use client";

export default function VideoGenPage() {

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">

      <h1 className="text-5xl font-black mb-4">
        Ark VideoGen
      </h1>

      <p className="opacity-70 mb-10">
        Create AI videos from images and music.
      </p>

      <div className="grid gap-6">

        <section className="rounded-3xl border p-6">
          <h2 className="text-xl font-bold">
            Video Creator
          </h2>
        </section>

        <section className="rounded-3xl border p-6">
          <h2 className="text-xl font-bold">
            Asset Library
          </h2>
        </section>

        <section className="rounded-3xl border p-6">
          <h2 className="text-xl font-bold">
            Music Attachment
          </h2>
        </section>

        <section className="rounded-3xl border p-6">
          <h2 className="text-xl font-bold">
            Blog Inspiration Feed
          </h2>

          <div className="grid gap-4 mt-4 md:grid-cols-3">

            <div className="rounded-xl border p-4">
              Viral Shorts
            </div>

            <div className="rounded-xl border p-4">
              AI Content Ideas
            </div>

            <div className="rounded-xl border p-4">
              Trending Reels
            </div>

          </div>

        </section>

        <section className="rounded-3xl border p-6">
          <h2 className="text-xl font-bold">
            Export MP4
          </h2>

          <button
            className="mt-4 px-5 py-3 rounded-xl border"
          >
            Download Video
          </button>
        </section>

        <section className="rounded-3xl border p-6">
          <h2 className="text-xl font-bold">
            Publish Center
          </h2>

          <div className="flex gap-4 mt-4">

            <button className="rounded-xl border px-4 py-2">
              YouTube
            </button>

            <button className="rounded-xl border px-4 py-2">
              Instagram
            </button>

          </div>

        </section>

      </div>

    </main>
  );
}
