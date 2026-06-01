import { API_URL } from "@/lib/config/api";

export async function loadMessages(
  channelId:string
){

  const res =
    await fetch(
      `${API_URL}/messages/${channelId}`,
      {
        cache:"no-store",
        headers:{
          Authorization:
            "Bearer demo"
        }
      }
    );

  return res.json();

}
