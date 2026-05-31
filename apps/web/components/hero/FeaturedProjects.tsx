export default function FeaturedProjects() {

  const posters = [
    "/reference/posters/poster-frontier.webp",
    "/reference/posters/poster-yakudoh.webp",
    "/reference/posters/poster-basta.webp"
  ];

  return (
    <section className="py-20 px-8">
      <h2 className="text-5xl font-black mb-10">
        Featured Projects
      </h2>

      <div
        className="
        grid
        md:grid-cols-3
        gap-8
        "
      >
        {posters.map(poster => (
          <img
            key={poster}
            src={poster}
            className="
            rounded-3xl
            hover:scale-105
            transition-all
            duration-500
            "
          />
        ))}
      </div>
    </section>
  );
}
