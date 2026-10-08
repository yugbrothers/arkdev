"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { Search, Heart, Sparkles, X, ArrowUpRight, Grid, Filter } from "lucide-react";
import { componentMetadata } from "@/lib/constants/Information";
import { NEW } from "@/lib/constants/Categories";

interface ComponentItem {
  key: string;
  categoryKey: string;
  componentKey: string;
  categoryLabel: string;
  title: string;
  description: string;
  videoUrl: string;
  tags: string[];
  docsUrl?: string;
  isNew: boolean;
}

function fromPascal(str: string): string {
  if (!str) return "";
  return str.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
}

export default function BrowseSection() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("ark_saved_components");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch {
      // noop
    }
  }, []);

  const toggleFavorite = (key: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => {
      const next = prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key];
      try {
        localStorage.setItem("ark_saved_components", JSON.stringify(next));
      } catch {
        // noop
      }
      return next;
    });
  };

  // Convert metadata into items list
  const allItems: ComponentItem[] = useMemo(() => {
    return Object.entries(componentMetadata).map(([fullKey, meta]) => {
      const [cat, comp] = fullKey.split("/");
      const title = fromPascal(meta.name || comp);
      return {
        key: fullKey,
        categoryKey: cat,
        componentKey: comp,
        categoryLabel: fromPascal(meta.category || cat),
        title,
        description: meta.description || "",
        videoUrl: meta.videoUrl || "",
        tags: Array.isArray(meta.tags) ? meta.tags : [],
        docsUrl: meta.docsUrl,
        isNew: NEW.includes(title) || NEW.includes(meta.name),
      };
    });
  }, []);

  // Unique categories list
  const categories = useMemo(() => {
    const set = new Set<string>();
    allItems.forEach((item) => {
      if (item.categoryLabel) set.add(item.categoryLabel);
    });
    return ["All", ...Array.from(set).sort()];
  }, [allItems]);

  // Filtered items
  const filteredItems = useMemo(() => {
    const term = search.toLowerCase().trim();
    return allItems
      .filter((item) => {
        if (selectedCategory !== "All" && item.categoryLabel !== selectedCategory) {
          return false;
        }
        if (onlyFavorites && !favorites.includes(item.key)) {
          return false;
        }
        if (!term) return true;
        const inTitle = item.title.toLowerCase().includes(term);
        const inDesc = item.description.toLowerCase().includes(term);
        const inCat = item.categoryLabel.toLowerCase().includes(term);
        const inTags = item.tags.some((t) => t.toLowerCase().includes(term));
        return inTitle || inDesc || inCat || inTags;
      })
      .sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return a.title.localeCompare(b.title);
      });
  }, [allItems, search, selectedCategory, onlyFavorites, favorites]);

  return (
    <section className="w-full">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Component Catalog
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Browse Components
          </h1>
          <p className="mt-2 text-white/60 text-base max-w-xl">
            Explore animated UI components, interactive WebGL shaders, text animations, and background effects ready for your projects.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-medium">
            <span className="text-purple-400 font-bold">{filteredItems.length}</span> of {allItems.length} Components
          </div>
          <button
            onClick={() => setOnlyFavorites(!onlyFavorites)}
            className={`px-4 py-2 rounded-xl border text-sm font-medium flex items-center gap-2 transition-all ${
              onlyFavorites
                ? "bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/25"
                : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Heart className={`w-4 h-4 ${onlyFavorites ? "fill-white text-white" : ""}`} />
            Favorites {favorites.length > 0 && `(${favorites.length})`}
          </button>
        </div>
      </div>

      {/* Search and Category Filters */}
      <div className="flex flex-col gap-4 mb-8">
        {/* Search Input */}
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search components... (e.g. aurora, border, card, cursor, text)"
            className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.07] transition-all text-sm md:text-base backdrop-blur-md"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? allItems.length
                : allItems.filter((i) => i.categoryLabel === cat).length;
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                  active
                    ? "bg-white text-black shadow-lg shadow-white/10"
                    : "bg-white/[0.04] border border-white/10 text-white/70 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-md ${
                    active ? "bg-black/15 text-black font-bold" : "bg-white/10 text-white/50"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Components Grid */}
      {filteredItems.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-12 text-center my-12">
          <Grid className="w-12 h-12 text-white/20 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No components found</h3>
          <p className="text-white/50 text-sm max-w-md mx-auto mb-6">
            We couldn't find any components matching &quot;{search}&quot;. Try clearing filters or searching for something else.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedCategory("All");
              setOnlyFavorites(false);
            }}
            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredItems.map((item) => {
            const isFav = favorites.includes(item.key);
            const isHovered = hoveredKey === item.key;

            return (
              <div
                key={item.key}
                onMouseEnter={() => setHoveredKey(item.key)}
                onMouseLeave={() => setHoveredKey((prev) => (prev === item.key ? null : prev))}
                className="group relative rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 p-2.5 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 flex flex-col overflow-hidden"
              >
                {/* Media Preview Box */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black/40 border border-white/5 flex items-center justify-center">
                  <ComponentVideoPreview
                    videoUrl={item.videoUrl}
                    isPlaying={isHovered}
                  />

                  {/* New Badge */}
                  {item.isNew && (
                    <span className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-purple-500/80 text-white border border-purple-400/40 backdrop-blur-md">
                      New
                    </span>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => toggleFavorite(item.key, e)}
                    aria-label="Save to favorites"
                    className={`absolute top-2 right-2 z-10 w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                      isFav
                        ? "bg-purple-600 text-white opacity-100 scale-100"
                        : "bg-black/50 text-white/70 border border-white/10 opacity-0 group-hover:opacity-100 hover:text-white hover:scale-110"
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isFav ? "fill-white" : ""}`} />
                  </button>

                  {/* Category Pill Tag */}
                  <span className="absolute bottom-2 left-2 z-10 px-2 py-0.5 rounded-md text-[10px] font-medium bg-black/60 text-white/80 border border-white/10 backdrop-blur-md">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Info Content */}
                <div className="pt-3 pb-1 px-1 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-sm group-hover:text-purple-300 transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-purple-400 transition-colors" />
                    </h3>
                    <p className="text-white/50 text-xs mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-white/5">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

function ComponentVideoPreview({
  videoUrl,
  isPlaying,
}: {
  videoUrl: string;
  isPlaying: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (isPlaying) {
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.catch(() => {});
      }
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [isPlaying]);

  if (!videoUrl) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white/20 text-xs">
        Preview Unavailable
      </div>
    );
  }

  // Base path without extension
  const base = videoUrl.replace(/\.(webm|mp4)$/i, "");
  const webmUrl = `${base}.webm`;
  const mp4Url = `${base}.mp4`;

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      preload="metadata"
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    >
      <source src={webmUrl} type="video/webm" />
      <source src={mp4Url} type="video/mp4" />
    </video>
  );
}
