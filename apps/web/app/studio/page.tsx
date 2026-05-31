export default function StudioPage(){

  const prompts = [
    "Startup Generator",
    "Business Plan",
    "Marketing Strategy",
    "Code Generator",
    "Agent Prompt"
  ];

  return (
    <main className="pt-28 px-8">
      <h1 className="text-6xl font-black mb-10">
        ArkDev Studio
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {prompts.map(prompt => (
          <div
            key={prompt}
            className="
            rounded-2xl
            border
            border-white/10
            p-6
            "
          >
            {prompt}
          </div>
        ))}
      </div>
    </main>
  );
}
