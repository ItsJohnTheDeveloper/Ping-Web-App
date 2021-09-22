import axios from "axios";
import { Ping } from "../models/ping";
const path = "http://localhost:4000";

export async function getPings() {
  const response = await axios.get(path);
  return response.data;
}

export async function createPing(ping: Ping) {
  const response = await axios.post(path + "/pings", ping);
  const data = response.data;
  return data;
}
