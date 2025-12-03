import express, { Request, Response } from "express";

const app = express();
const port = 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello David!");
});

app.listen(port, () => {
  console.log(`Big Exercise is listening on port: ${port}!`);
});
