import UserCard from "@/components/profile/UserCard";
import FriendRequests from "@/components/social/FriendRequests";
import DirectMessages from "@/components/chat/DirectMessages";

export default function ProfilePage(){

  return(

    <main
      className="
      max-w-7xl
      mx-auto
      p-8
      "
    >

      <h1
        className="
        text-5xl
        font-bold
        mb-8
        "
      >
        Profile
      </h1>

      <div
        className="
        grid
        md:grid-cols-3
        gap-6
        "
      >

        <UserCard />

        <FriendRequests />

        <DirectMessages />

      </div>

    </main>

  );

}
