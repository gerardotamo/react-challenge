import axios from "axios";
import { API_URL } from "./constants/api";


export async function getCommentsForPost(id?: string) {
    try {
        const resp = await axios.get(`${API_URL}comments?postId=${id}`);
        return resp.data
    } catch (error) {
        console.log((error as Error).message)
    }
}