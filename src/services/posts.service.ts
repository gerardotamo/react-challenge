import axios from "axios";
import { API_URL } from "./constants/api";

export async function getPostsForUser(id: string | undefined) {
    try {
        const resp = await axios.get(`${API_URL}posts?userId=${id}`);
        return resp.data;
    } catch (error) {
        console.log((error as Error).message)
    }
}