import fs from "fs";
import path from "path";

export default function ShowcasePage() {

  const posterDir =
    path.join(
      process.cwd(),
      "public/reference/posters"
    );

  const posters =
    fs.readdirSync(posterDir);

  return (
    <main className="relative min-h-screen overflow-hidden"><video autoPlay muted loop playsInline className="fixed inset-0 w-full h-full object-cover -z-10"><source src="/videos/butterfly.mp4" type="video/mp4" /></video><div className="absolute inset-0 bg-black/60 -z-10" /><div className="pt-28 px-8 relative z-10">
      <h1 className="text-6xl font-black mb-10">
        Featured Projects
      </h1>

      <div
        className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
        "
      >
        {posters.map(poster => (
          <img
            key={poster}
            src={`/reference/posters/${poster}`}
            alt=""
            className="
            rounded-3xl ark-hover-card
            hover:scale-105
            hover:-rotate-1
            transition-all
            duration-500
            shadow-2xl
            "
          />
        ))}
      </div>
    </div></main>
  );
}
