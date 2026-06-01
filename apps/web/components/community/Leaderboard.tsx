export default function Leaderboard(){

  const users = [
    "Prem",
    "AI Agent",
    "Founder",
    "Builder",
    "Developer"
  ];

  return(

    <div
      className="
      p-6
      rounded-2xl
      border
      border-white/10
      bg-white/5
      "
    >

      <h3
        className="
        font-bold
        mb-4
        "
      >
        Top Builders
      </h3>

      {users.map((user,index)=>(

        <div
          key={user}
          className="
          flex
          justify-between
          py-2
          "
        >
          <span>
            {index+1}. {user}
          </span>

          <span>
            ⭐
          </span>

        </div>

      ))}

    </div>

  );

}
