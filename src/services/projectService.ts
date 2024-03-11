import http from "./httpService";
import { ProjectData, ProjectPost } from "../types/types";

export function projects(workSpaceData :string) {
    const accessToken = localStorage.getItem("access");
    return http.get(`workspaces/${workSpaceData}/projects/`, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
    });
}

export function postProjects(id: string, payload: ProjectPost) {
    const accessToken = localStorage.getItem("access");
    return http.post(`workspaces/${id}/projects/`, payload, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
    });
}

