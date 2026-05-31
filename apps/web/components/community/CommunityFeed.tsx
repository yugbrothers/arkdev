export default function CommunityFeed(){

  const posts = [
    "New AI workspace released",
    "Realtime chat coming soon",
    "Archive gallery upgraded"
  ];

  return (
    <div className="space-y-4">
      {posts.map(post => (
        <div
          key={post}
          className="
          p-5
          rounded-2xl
          border
          border-white/10
          "
        >
          {post}
        </div>
      ))}
    </div>
  );
}
