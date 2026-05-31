export default function ChatPage() {

  const messages = [
    {
      user:"Prem",
      text:"Welcome to ArkDev"
    },
    {
      user:"AI",
      text:"How can I help?"
    }
  ];

  return (
    <main className="pt-28 px-8">
      <h1 className="text-6xl font-black mb-10">
        ArkDev Chat
      </h1>

      <div
        className="
        rounded-3xl
        border
        border-white/10
        h-[600px]
        p-6
        flex
        flex-col
        "
      >
        <div className="flex-1 space-y-4">
          {messages.map((m,index) => (
            <div key={index}>
              <strong>{m.user}</strong>

              <div>{m.text}</div>
            </div>
          ))}
        </div>

        <input
          placeholder="Send message..."
          className="
          mt-4
          p-4
          rounded-xl
          bg-white/5
          border
          border-white/10
          "
        />
      </div>
    </main>
  );
}
