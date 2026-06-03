export type MusicGenerationRequest = {
  prompt: string;
};

export async function generateMusic(
  request: MusicGenerationRequest
) {
  return {
    success: true,
    prompt: request.prompt,
    audio: null
  };
}
