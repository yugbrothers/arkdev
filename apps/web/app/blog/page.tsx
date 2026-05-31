const blogs = [
  {
    title:"Building AI SaaS Products",
    image:"https://images.unsplash.com/photo-1484417894907-623942c8ee29",
    link:"https://openai.com"
  },
  {
    title:"Realtime Collaboration",
    image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    link:"https://socket.io"
  },
  {
    title:"Scaling Startups",
    image:"https://images.unsplash.com/photo-1552664730-d307ca884978",
    link:"https://render.com"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-28 px-8">
      <h1 className="text-6xl font-black mb-12">
        Blog
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <a
            key={blog.title}
            href={blog.link}
            target="_blank"
            className="
            rounded-3xl
            overflow-hidden
            border
            border-white/10
            hover:scale-105
            transition-all
            "
          >
            <img
              src={blog.image}
              className="h-60 w-full object-cover"
            />

            <div className="p-5">
              {blog.title}
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
