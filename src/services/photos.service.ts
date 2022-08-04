import axios from "axios";
import { API_URL } from "./constants/api";

export async function getPhotos() {
    try {
        const resp = await axios.get(`${API_URL}photos`);
        return resp.data;
    } catch (error) {
        console.log((error as Error).message)
    }
}