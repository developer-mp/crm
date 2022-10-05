import express from "express";
import cors from "cors";
import AppRouter from "./routes/routers";

const app = express();
app.use(cors());
app.use(express.json());

AppRouter.setRouter(app);

app.use(function (req: any, res: any, next: any) {});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});

export default app;
