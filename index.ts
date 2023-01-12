import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("user/:id", (req: Request, res: Response) => {
  const userId = req.params.id;
  res.send("Received UserId as : " + userId);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
