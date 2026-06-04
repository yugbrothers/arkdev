export default function ReelPage() {

  const videos = [
    "clouds.mp4",
    "kling.mp4",
    "cycle.mp4",
    "musicgen.mp4",
    "videogen.mp4",
    "trainstring.mp4",
    "spark.mp4",
    "dragon.mp4",
    "eagle.mp4",
    "butterfly.mp4",
    "beach.mp4",
    "cyclone.mp4",
    "avatar.mp4"
  ];

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
            className="w-full rounded-3xl"
          >
            <source
              src={`/video/${video}`}
              type="video/mp4"
            />
          </video>
        ))}
      </div>
    </main>
  );
}
