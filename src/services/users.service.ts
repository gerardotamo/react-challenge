import axios from "axios";
import { API_URL } from "./constants/api";
export async function getAllUsers() {
    try {
        let resp = await axios.get(`${API_URL}users`)
        return resp.data
    } catch (e) {
        console.log((e as Error).message)
    }
}