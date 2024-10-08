import { v4 as uuidv4 } from 'uuid';
const headers: HeadersInit = {
  'Content-Type': 'application/json',
  'X-Request-Id': uuidv4(),
  'Authorization': `Bearer <API_TOKEN>`
}

export type TaskParam = {
    content: string;
    due_lang: string;
    due_string: string;
    priority: number
  };
  const taskParam: TaskParam = {
    content: 'Buy eggs',
    due_string: 'Tomorrow at 12.00',
    due_lang: 'en',
    priority: 1,
  }

  export async function createTask(taskParam: TaskParam): Promise<Response> {
    const url = 'https://api.todoist.com/rest/v1/tasks';
    const opts: RequestInit = {
      method: 'POST',
      headers,
      body: JSON.stringify(taskParam),
    };
    return fetch(url, opts)
  }

  export async function getTasks(): Promise<Response> {
    const url = 'https://api.todoist.com/rest/v1/tasks';
    const opts: RequestInit = {
      method: 'GET',
      headers,
    };
    return fetch(url, opts)
  }

  //Usage
  const response= createTask(taskParam);
  //const result = await response.json();