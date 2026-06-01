export default function DirectMessages(){

  const users = [
    "AI Agent",
    "Founder",
    "Builder"
  ];

  return(

    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-6
      "
    >

      <h3
        className="
        font-bold
        mb-4
        "
      >
        Direct Messages
      </h3>

      {users.map(user=>(

        <div
          key={user}
          className="
          py-2
          cursor-pointer
          hover:opacity-80
          "
        >
          💬 {user}
        </div>

      ))}

    </div>

  );

}
