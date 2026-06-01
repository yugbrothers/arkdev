export default function FriendRequests(){

  const requests = [
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
        Friend Requests
      </h3>

      {requests.map(user=>(

        <div
          key={user}
          className="
          flex
          justify-between
          py-2
          "
        >
          <span>{user}</span>

          <button
            className="
            px-3
            py-1
            rounded-lg
            bg-blue-500/20
            "
          >
            Accept
          </button>

        </div>

      ))}

    </div>

  );

}
