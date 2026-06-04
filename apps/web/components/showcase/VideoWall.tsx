export default function VideoWall() {

  const videos = [
    "/video/clouds.mp4",
    "/video/kling.mp4",
    "/video/cycle.mp4",
    "/video/musicgen.mp4"
  ];

  return (
    <section className="py-24 px-8">

      <h2 className="text-5xl font-black mb-10">
        Motion Showcase
      </h2>

      <div
        className="
        grid
        lg:grid-cols-2
        gap-8
        "
      >
        {videos.map(video => (
          <video
            key={video}
            autoPlay
            muted
            loop
            playsInline
            className="
            w-full
            rounded-3xl
            ark-hover-card
            "
          >
            <source
              src={video}
              type="video/mp4"
            />
          </video>
        ))}
      </div>

    </section>
  );
}
