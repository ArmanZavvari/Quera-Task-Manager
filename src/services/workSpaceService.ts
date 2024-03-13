import { WorkSpacesPost, WorkSpacesPut } from "../types/types";
import http from "./httpService";

export function workSpaces() {
  const accessToken = localStorage.getItem("access");
  return http.get(`workspaces/`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
}

export function postWorkSpace(payload: WorkSpacesPost) {
  const accessToken = localStorage.getItem("access");

  return http.post(`workspaces/`, payload, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
}

export function patchWorkSpace(payload:WorkSpacesPost, id:string){
    const accessToken = localStorage.getItem("access")

    return http.patch(`workspaces/${id}/`, payload , {
        headers: { 'Authorization': `Bearer ${accessToken}` }
    })
}
export function deleteWorkSpace(id:string){
    const accessToken = localStorage.getItem("access")

    return http.delete(`workspaces/${id}/`, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
    })
}
export function putWorkSpace(payload:WorkSpacesPut, id:string){
    const accessToken = localStorage.getItem("access")

    return http.put(`workspaces/${id}/`, payload , {
        headers: { 'Authorization': `Bearer ${accessToken}` }
    })
}
