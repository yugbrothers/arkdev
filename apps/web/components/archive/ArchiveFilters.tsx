"use client";

const filters = [
  "All",
  "Projects",
  "AI",
  "Research",
  "Videos",
  "Showcase"
];

export default function ArchiveFilters() {
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {filters.map(filter => (
        <button
          key={filter}
          className="
          px-5
          py-2
          rounded-full
          border
          border-white/10
          hover:bg-white/10
          "
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
