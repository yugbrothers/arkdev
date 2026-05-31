import fs from "fs";
import path from "path";

export default function ReelPage() {

  const videoDir =
    path.join(
      process.cwd(),
      "public/reference/videos"
    );

  const videos =
    fs.readdirSync(videoDir);

  return (
    <main className="pt-28 px-8">
      <h1 className="text-6xl font-black mb-10">
        Motion Reel
      </h1>

      <div className="space-y-10">
        {videos.map(video => (
          <video
            key={video}
            controls
            className="
            w-full
            rounded-3xl
            "
          >
            <source
              src={`/reference/videos/${video}`}
              type="video/mp4"
            />
          </video>
        ))}
      </div>
    </main>
  );
}
