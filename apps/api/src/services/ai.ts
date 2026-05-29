import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function generateTasks(
  idea: string
) {
  const response =
    await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "Generate 5 implementation tasks."
        },
        {
          role: "user",
          content: idea
        }
      ]
    });

  return response.choices[0].message.content;
}
