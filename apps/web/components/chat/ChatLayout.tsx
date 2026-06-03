export default function ChatLayout() {
  return (
    <div
      className="
      grid
      md:grid-cols-[250px_1fr_250px]
      gap-4
      h-[75vh] min-h-[500px] max-h-[1000px]
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
