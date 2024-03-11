import { WorkSpacesPost } from "../types/types";
import http from "./httpService";


export function workSpaces() {
    const accessToken = localStorage.getItem("access")
    return http.get(`workspaces/`, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
    });
}

export function postWorkSpace(payload:WorkSpacesPost){
    const accessToken = localStorage.getItem("access")

    return http.post(`workspaces/`, payload , {
        headers: { 'Authorization': `Bearer ${accessToken}` }
    })
}
