import { Ping } from "./models/ping";

export function generateNewPing(text: string): Ping {
  return {
    text: text,
    date: new Date(),
  };
}
