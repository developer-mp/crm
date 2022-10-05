import Express from "express";
import cors from "cors";
// import path from "path";
// import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();
import AppServerRouter from "./routes/routers.js";

const app = new Express();
const PORT = process.env.PORT;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

app.use(Express.json());
app.use(cors());
app.use(Express.urlencoded({ extended: false }));
// app.use(Express.static(path.join(__dirname, "views")));

// app.set("view engine", "pug");
// app.set("views", `${__dirname}/views`);

AppServerRouter.setRouter(app);

app.use(function () {});

app.listen(PORT, () => console.log("App server has started on port " + PORT));
