export class AIService {
  async generateProject(prompt: string) {
    return {
      title: "Generated Project",
      prompt
    };
  }

  async generateTask(prompt: string) {
    return {
      title: "Generated Task",
      prompt
    };
  }
}
