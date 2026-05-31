export default function VideoWall() {

  const videos = [
    "/reference/videos/frontier.mp4",
    "/reference/videos/yakudoh.mp4",
    "/reference/videos/basta.mp4",
    "/reference/videos/redandgreen.mp4"
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
