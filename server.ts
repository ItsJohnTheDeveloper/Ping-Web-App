require("dotenv").config();
import express, { Request, Response, Application } from "express";
import { PingDocument } from "./client/src/models/ping";
import { MongoClient, InsertOneResult } from "mongodb";
const connectionString = process.env.MONGODB_URI;
const MONGODB_NAME = process.env.MONGODB_NAME;
const port = process.env.PORT;
const cors = require("cors");

const app: Application = express();

app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

MongoClient.connect(connectionString)
  .then((client: MongoClient) => {
    const db = client.db(MONGODB_NAME);
    console.log("Connected to Database");

    app.get("/", async (req: Request, res: Response) => {
      try {
        const data = await db
          .collection("posts")
          .find()
          .sort({ date: -1 })
          .toArray();
        res.status(200).json(data);
        console.log("Successfully Fetched all Pings!");
      } catch (err) {
        console.error(err);
      }
    });

    app.post("/pings", async (req: Request, res: Response) => {
      try {
        const result: InsertOneResult<PingDocument> = await db
          .collection("posts")
          .insertOne(req.body);

        const resultDocumentID = result.insertedId;
        console.log("Successfully Created PING!");
        res.status(201).json(resultDocumentID);
      } catch (err) {
        console.error(err);
      }
    });
  })
  .catch(console.error);

app.listen(port);
console.log(`Running on port: ${port}`);
