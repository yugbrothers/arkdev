import RealtimeChat from "@/components/chat/RealtimeChat";

export default function ChatPage() {

  return (
    <main className="pt-28 px-8">

      <h1
        className="
        text-6xl
        font-black
        mb-10
        "
      >
        ArkDev Chat
      </h1>

      <RealtimeChat />

    </main>
  );
}
