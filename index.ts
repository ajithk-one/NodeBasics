import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/user/:id", (req: Request, res: Response) => {
  const userId = req.params.id,
    queryParams = req.query;

  res.send(
    `Received UserId as : ${userId} ${
      queryParams ? "queryParams : " + JSON.stringify(queryParams) : ""
    }`
  );
});

app.post("/createUser", (req: Request, res: Response) => {
  const userParams = req.body;

  res.json(userParams);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

module.exports = app;
