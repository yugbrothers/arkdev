export default function ChatLayout() {
  return (
    <div
      className="
      grid
      md:grid-cols-[250px_1fr_250px]
      gap-4
      h-[700px]
      "
    >

      <div className="border rounded-2xl p-4">
        Channels
      </div>

      <div className="border rounded-2xl p-4">
        Messages
      </div>

      <div className="border rounded-2xl p-4">
        Online Users
      </div>

    </div>
  );
}
