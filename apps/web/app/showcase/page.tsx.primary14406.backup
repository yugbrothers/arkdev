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
    <main className="pt-28 px-8">
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
    </main>
  );
}
