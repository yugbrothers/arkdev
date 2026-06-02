import { getNotifications } from "@/lib/api";

export default async function NotificationsPage(){

  const notifications =
    await getNotifications();

  return(

    <main className="pt-28 px-8">

      <h1
        className="
        text-6xl
        font-black
        mb-10
        "
      >
        Notifications
      </h1>

      <div className="space-y-4">

        {notifications.map((item:any)=>(

          <div
            key={item.id}
            className="
            rounded-2xl
            border
            border-white/10
            p-5
            "
          >
            <div>{item.message}</div>

            <div
              className="
              text-xs
              opacity-60
              mt-2
              "
            >
              {new Date(
                item.createdAt
              ).toLocaleString()}
            </div>

          </div>

        ))}

      </div>

    </main>

  );

}
