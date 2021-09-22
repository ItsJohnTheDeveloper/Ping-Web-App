import { ObjectID } from "bson";

export interface MongoDocument {
  _id: ObjectID;
  date: Date;
}
