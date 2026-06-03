import axios from "axios";

export async function generateImage(prompt: string) {
  const response = await axios.post(
    "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
    {
      inputs: prompt
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`
      },
      responseType: "arraybuffer"
    }
  );

  return response.data;
}
