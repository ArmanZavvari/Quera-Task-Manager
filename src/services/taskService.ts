import { TaskData } from "../types/types";
import http from "./httpService";

export function taskGet(
  workspaceId: number,
  projectId: number,
  boardId: number
) {
  const accessToken = localStorage.getItem("access");
  return http.get(
    `workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
}

export function taskPost(payload: TaskData) {
  const accessToken = localStorage.getItem("access");

  return http.post(`workspaces/`, payload, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
}
