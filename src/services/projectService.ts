import http from "./httpService";
import { ProjectPost } from "../types/types";

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

export function patchProjects(payload: ProjectPost,id: string, idP:string ) {
    const accessToken = localStorage.getItem("access");
    return http.patch(`workspaces/${id}/projects/${idP}/`, payload, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
    });
}

export function deleteProjects( idP:string,id: string) {
    const accessToken = localStorage.getItem("access");
    return http.delete(`workspaces/${id}/projects/${idP}/`, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
    });
}
