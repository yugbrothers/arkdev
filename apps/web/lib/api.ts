import { TOKEN } from "./auth";

const API_URL = "https://arkdev-api.onrender.com";

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
    "https://arkdev-api.onrender.com/ai/project",
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

export async function getWorkspaces() {
  const response = await fetch(
    `${API_URL}/workspaces`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      },
      cache: "no-store"
    }
  );

  return response.json();
}

export async function getWorkspaceProjects(
  workspaceId: string
) {
  const response = await fetch(
    `${API_URL}/workspaces/${workspaceId}/projects`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      },
      cache: "no-store"
    }
  );

  return response.json();
}

export async function createProject(
  name:string,
  description:string,
  workspaceId?:string
){
  const response = await fetch(
    `${API_URL}/projects`,
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${TOKEN}`
      },
      body:JSON.stringify({
        name,
        description,
        workspaceId
      })
    }
  );

  return response.json();
}

export async function createTask(
  title:string,
  projectId:string
){

  const response = await fetch(
    `${API_URL}/tasks`,
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${TOKEN}`
      },
      body:JSON.stringify({
        title,
        projectId
      })
    }
  );

  return response.json();

}

export async function updateTask(
  taskId:string,
  status:string
){

  const response = await fetch(
    `${API_URL}/tasks/${taskId}`,
    {
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${TOKEN}`
      },
      body:JSON.stringify({
        status
      })
    }
  );

  return response.json();

}

export async function createWorkspace(
  name:string
){

  const response = await fetch(
    `${API_URL}/workspaces`,
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${TOKEN}`
      },
      body:JSON.stringify({
        name
      })
    }
  );

  return response.json();

}


export async function getAllTasks() {

  const response = await fetch(
    `${API_URL}/tasks`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      },
      cache: "no-store"
    }
  );

  return response.json();

}

export async function getWorkspaceAnalytics(){

  const response = await fetch(
    `${API_URL}/analytics/workspaces`,
    {
      headers:{
        Authorization:`Bearer ${TOKEN}`
      },
      cache:"no-store"
    }
  );

  return response.json();

}

export async function getNotifications(){

  const response = await fetch(
    `${API_URL}/notifications`,
    {
      headers:{
        Authorization:`Bearer ${TOKEN}`
      },
      cache:"no-store"
    }
  );

  return response.json();

}


export async function getWorkspaceMembers(
  workspaceId:string
){

  const response = await fetch(
    `${API_URL}/workspaces/${workspaceId}/members`,
    {
      headers:{
        Authorization:`Bearer ${TOKEN}`
      },
      cache:"no-store"
    }
  );

  return response.json();

}

export async function inviteWorkspaceMember(
  workspaceId:string,
  email:string
){

  const response = await fetch(
    `${API_URL}/workspaces/${workspaceId}/members`,
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${TOKEN}`
      },
      body:JSON.stringify({
        email
      })
    }
  );

  return response.json();

}

