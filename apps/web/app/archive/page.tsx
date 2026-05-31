import fs from "fs";
import path from "path";

export default function ArchivePage() {

  const archiveDir =
    path.join(
      process.cwd(),
      "public/reference/archive"
    );

  const images =
    fs.readdirSync(archiveDir)
      .filter(file =>
        file.endsWith(".webp")
      );

  return (
    <main className="pt-28 px-8 pb-20">
      <h1 className="text-6xl font-black mb-10">
        Archive
      </h1>

      <div
        className="
        columns-2
        md:columns-3
        lg:columns-4
        gap-4
        "
      >
        {images.map(image => (
          <img
            key={image}
            src={`/reference/archive/${image}`}
            alt=""
            className="
            mb-4
            rounded-2xl
            hover:scale-105
            transition-all
            duration-500
            "
          />
        ))}
      </div>
    </main>
  );
}
