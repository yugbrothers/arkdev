import BrowseSection from "@/components/workspace/BrowseSection";

export const metadata = {
  title: "Workspace - Browse Components | ArkDev",
  description: "Browse the full collection of ArkDev animated UI components, backgrounds, and shaders.",
};

export default function WorkspacePage() {
  return (
    <main className="relative min-h-screen">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/15 via-black/80 to-black" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-24">
        <BrowseSection />
      </div>
    </main>
  );
}
