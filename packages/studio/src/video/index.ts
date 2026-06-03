export type VideoGenerationRequest = {
  prompt: string;
};

export async function generateVideo(
  request: VideoGenerationRequest
) {
  return {
    success: true,
    prompt: request.prompt,
    video: null
  };
}
