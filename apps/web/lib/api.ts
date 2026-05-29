import { TOKEN } from "./auth";

const API_URL = "http://localhost:5050";

export async function getProjects() {
  const response = await fetch(
    `${API_URL}/projects`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      },
      cache: "no-store"
    }
  );

  return response.json();
}

export async function getTasks(
  projectId: string
) {
  const response = await fetch(
    `${API_URL}/tasks/${projectId}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      },
      cache: "no-store"
    }
  );

  return response.json();
}

export async function generateProject(
  idea: string
) {
  const response = await fetch(
    "http://localhost:5050/ai/project",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        idea
      })
    }
  );

  return response.json();
}
