import { MongoDocument } from "./mongo-document";

export interface Ping {
  key?: string;
  date?: Date;
  text: string;
}

export interface PingDocument extends MongoDocument {
  text: string;
}
