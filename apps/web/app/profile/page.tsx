import UserCard from "@/components/profile/UserCard";
import FriendRequests from "@/components/social/FriendRequests";
import DirectMessages from "@/components/chat/DirectMessages";

export default function ProfilePage(){

  return(

    <main className="relative min-h-[1924px] overflow-hidden"><video autoPlay muted loop playsInline className="fixed inset-0 w-full h-full object-cover -z-10"><source src="/video/butterfly.mp4" type="video/mp4" /></video><div className="absolute inset-0 bg-black/60 -z-10" /><div
      className="
      max-w-7xl
      mx-auto
      p-8
      "
    >

      <h1
        className="
        text-3xl md:text-4xl lg:text-5xl
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

    </div></main>

  );

}
